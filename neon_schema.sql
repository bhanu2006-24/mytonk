-- Copy this SQL to your Neon Query Editor to create the necessary tables

CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'customer',
    phone TEXT,
    location TEXT,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services (
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
);

CREATE TABLE IF NOT EXISTS products (
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
);

CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    title JSONB NOT NULL,
    date TEXT NOT NULL,
    time TEXT,
    location TEXT,
    description JSONB,
    image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transport (
    id TEXT PRIMARY KEY,
    name JSONB NOT NULL,
    type TEXT NOT NULL,
    description JSONB,
    price TEXT,
    contact TEXT,
    image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    user_id TEXT REFERENCES users(id),
    items JSONB NOT NULL,
    total NUMERIC NOT NULL,
    status TEXT DEFAULT 'Pending',
    date TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
