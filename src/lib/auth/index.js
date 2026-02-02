import { db } from '../database';

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

  register: async (userData, users) => {
      // Check if email already exists
      if (users.some(u => u.email === userData.email)) {
          return { success: false, error: 'Email already registered' };
      }

      const newUser = {
          id: Date.now().toString(),
          role: 'customer', // default
          ...userData
      };
      
      // Save to DB (Neon + LS)
      await db.users.create(newUser);
      
      // Update local array wrapper for immediate UI feedback
      const updatedUsers = [...users, newUser];
      
      return { success: true, user: newUser, allUsers: updatedUsers };
  }
};
