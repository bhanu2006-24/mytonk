import { neon } from './neon';

export const initializeSchema = async () => {
    // This function creates tables if they don't exist.
    // It is called by AppContext if it detects a "missing relation" error.
    
    const queries = [
        `CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'customer',
            phone TEXT,
            location TEXT,
            bio TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`,
        
        `CREATE TABLE IF NOT EXISTS services (
            id TEXT PRIMARY KEY,
            name JSONB NOT NULL,
            category TEXT NOT NULL,
            description JSONB,
            price NUMERIC,
            rating NUMERIC DEFAULT 0,
            reviews INTEGER DEFAULT 0,
            image TEXT,
            provider TEXT,
            contact TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`,
        
        `CREATE TABLE IF NOT EXISTS products (
            id TEXT PRIMARY KEY,
            name JSONB NOT NULL,
            category TEXT NOT NULL,
            description JSONB,
            price NUMERIC,
            unit TEXT,
            rating NUMERIC DEFAULT 0,
            image TEXT,
            seller TEXT,
            stock INTEGER DEFAULT 100,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`,
        
        `CREATE TABLE IF NOT EXISTS events (
            id TEXT PRIMARY KEY,
            title JSONB NOT NULL,
            date TEXT NOT NULL,
            time TEXT,
            location TEXT,
            description JSONB,
            image TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`,
        
        `CREATE TABLE IF NOT EXISTS transport (
            id TEXT PRIMARY KEY,
            name JSONB NOT NULL,
            type TEXT NOT NULL,
            description JSONB,
            price TEXT,
            contact TEXT,
            image TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`,
        
        `CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            user_id TEXT,
            items JSONB NOT NULL,
            total NUMERIC NOT NULL,
            status TEXT DEFAULT 'Pending',
            payment JSONB,
            date TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`
    ];

    console.log("Initializing Schema...");
    try {
        for (const query of queries) {
             await neon.query(query);
        }
        console.log("Schema Initialized Successfully");
        return true;
    } catch (error) {
        console.error("Schema Initialization Failed:", error);
        throw error;
    }
};
