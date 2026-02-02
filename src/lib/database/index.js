import { neon } from './neon';

const getLocalStorage = (key, defaultValue) => {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return defaultValue;
    return JSON.parse(stored);
  } catch (err) {
    console.error(`Error reading ${key} from localStorage`, err);
    // If not found, clear it
    localStorage.removeItem(key);
    return defaultValue;
  }
};

const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error saving ${key} to localStorage`, err);
  }
};

// Hybrid Helper that tries Neon first, then LocalStorage
// Since Neon is async, we need to adapt our app to handle async data loading.
// For now, we provide both sync (LS) and async (Neon) methods.

export const db = {
    // --- Async Methods (Neon Primary) ---
    users: {
        getAll: async () => {
            const remote = await neon.getAll('users');
            if (remote) return remote;
            return getLocalStorage('users', []);
        },
        create: async (user) => {
            const remote = await neon.insert('users', user);
            // Always save to LS
            const current = getLocalStorage('users', []);
            setLocalStorage('users', [...current, user]);
            return remote ? remote[0] : user;
        },
        // We still need a sync getter for initial state before effect runs
        getAllSync: () => getLocalStorage('users', [])
    },
    
    // Generic table helpers
    table: (tableName) => ({
        getAll: async (defaults) => {
            const remote = await neon.getAll(tableName);
            if (remote && remote.length > 0) return remote;
            return getLocalStorage(tableName, defaults);
        },
        save: async (data, isNew = false) => {
             // Sync only
             setLocalStorage(tableName, data);
        },
        add: async (item) => {
            const remote = await neon.insert(tableName, item);
            const current = getLocalStorage(tableName, []);
            setLocalStorage(tableName, [...current, item]);
            return remote ? remote[0] : item;
        }
    }),

    // --- Sync Methods (LocalStorage Only) ---
    get: (key, def) => getLocalStorage(key, def),
    set: (key, val) => setLocalStorage(key, val),
};
