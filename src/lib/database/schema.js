import { neon } from './neon';
import { initialServices, initialProducts, initialEvents, initialTransport } from '../../data/data';

export const initializeSchema = async () => {
    // This function creates tables if they don't exist and seeds them with initial data.
    
    const tableQueries = [
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
        // 1. Create Tables
        for (const query of tableQueries) {
             await neon.query(query);
        }

        // 2. Sync Data from File to DB (Upsert)
        // This allows developers to edit src/data/data.js and have changes reflected in the DB
        const syncTable = async (tableName, data) => {
            console.log(`Syncing ${tableName}...`);
            for (const item of data) {
                // Construct dynamic upsert query
                const keys = Object.keys(item);
                const values = Object.values(item);
                const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ');
                
                // Build SET clause for update (exclude id and created_at)
                const updates = keys
                    .filter(k => k !== 'id' && k !== 'created_at')
                    .map((k) => `${k} = EXCLUDED.${k}`)
                    .join(', ');

                // We need to properly stringify JSON content for the DB driver if needed, 
                // though neon.js helper usually does it. Let's rely on neon.js's query method 
                // but we need to pass raw values.
                
                const query = `
                    INSERT INTO ${tableName} (${keys.join(', ')})
                    VALUES (${placeholders})
                    ON CONFLICT (id) DO UPDATE SET
                    ${updates};
                `;
                
                // Formatting values for JSON columns
                const formattedValues = values.map(v => (typeof v === 'object' && v !== null) ? JSON.stringify(v) : v);
                
                await neon.query(query, formattedValues);
            }
        };

        await syncTable('services', initialServices);
        await syncTable('products', initialProducts);
        await syncTable('events', initialEvents);
        await syncTable('transport', initialTransport);

        // Optional: Seed a default Admin?
        // Let's create one default admin so you aren't locked out.
        // Email: admin@tonkwale.com, Pass: admin123
        const admins = await neon.query(`SELECT * FROM users WHERE role = 'admin'`);
        if (admins.length === 0) {
             await neon.insert('users', {
                 id: 'admin_001',
                 name: 'Super Admin',
                 email: 'admin@tonkwale.com',
                 password: 'admin', 
                 role: 'admin',
                 phone: '0000000000',
                 location: 'Tonk, Rajasthan'
             });
        }

        console.log("Schema & Data Initialized Successfully");
        return true;
    } catch (error) {
        console.error("Schema Initialization Failed:", error);
        throw error;
    }
};
