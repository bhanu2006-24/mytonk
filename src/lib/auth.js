import { db } from './db';

export const authService = {
  login: (emailOrPhone, password, users) => {
    // Legacy/Demo mode support
    if (['customer', 'seller', 'admin'].includes(emailOrPhone)) {
        const demoUser = users.find(u => u.role === emailOrPhone);
        if (demoUser) {
            return { success: true, user: demoUser, isDemo: true };
        }
        return { success: false, error: 'Demo user not found' };
    }

    const foundUser = users.find(u => (u.email === emailOrPhone || u.phone === emailOrPhone) && u.password === password);
    
    if (foundUser) {
        // Strip password
        const { password: _, ...sessionUser } = foundUser;
        return { success: true, user: sessionUser };
    }
    
    return { success: false, error: 'Invalid credentials' };
  },

  register: (userData, users) => {
      // Check if email already exists
      if (users.some(u => u.email === userData.email)) {
          return { success: false, error: 'Email already registered' };
      }

      const newUser = {
          id: Date.now().toString(),
          role: 'customer', // default
          ...userData
      };
      
      const updatedUsers = [...users, newUser];
      db.users.save(updatedUsers); // Persist immediately? Or let context handle it? 
      // Better to let context handle state update, but for "auth service" it makes sense to handle persistence.
      // However, AppContext has the "source of truth" in state. 
      // To strictly separate, AppContext should subscribe to DB or calling setUsers should update DB.
      
      return { success: true, user: newUser, allUsers: updatedUsers };
  }
};
