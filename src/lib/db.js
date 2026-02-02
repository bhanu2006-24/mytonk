export const getLocalStorage = (key, defaultValue) => {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return defaultValue;
      return JSON.parse(stored);
    } catch (err) {
      console.error(`Error reading ${key} from localStorage`, err);
      return defaultValue;
    }
  };
  
export const setLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`Error saving ${key} to localStorage`, err);
    }
};

export const defaultUsers = [
    { id: 'u1', name: 'Admin User', email: 'admin@tonk.com', password: 'password', role: 'admin', phone: '9999999999' },
    { id: 'u2', name: 'Vijay Saini', email: 'user@example.com', password: 'password', role: 'customer', phone: '8888888888' },
    { id: 'u3', name: 'Partner User', email: 'seller@example.com', password: 'password', role: 'seller', phone: '7777777777' }
];

// Helper to simulate DB delay if needed, though we are sync with localstorage
export const db = {
    users: {
        getAll: () => getLocalStorage('users', defaultUsers),
        save: (users) => setLocalStorage('users', users),
    },
    services: {
        getAll: (defaults) => getLocalStorage('services', defaults),
        save: (data) => setLocalStorage('services', data),
    },
    // Generic wrapper
    get: (key, def) => getLocalStorage(key, def),
    set: (key, val) => setLocalStorage(key, val),
};
