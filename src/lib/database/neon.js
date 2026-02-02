import { Pool } from '@neondatabase/serverless';

// Initialize the pool
// Note: In a real production app, you should not expose the DB URL in client-side code.
// For this protype/agentic build, we are using it directly.
const connectionString = import.meta.env.VITE_NEON_DATABASE_URL;

const pool = connectionString ? new Pool({ connectionString }) : null;

export const neon = {
  // Generic query helper
  query: async (text, params) => {
    if (!pool) {
      console.warn("Neon DB URL missing");
      return null;
    }
    try {
      const { rows } = await pool.query(text, params);
      return rows;
    } catch (error) {
      console.error("Neon DB Query Error:", error);
      throw error; // Let the caller (AppContext) catch this to trigger schema init
    }
  },

  // Specific helpers
  async getAll(table) {
      return this.query(`SELECT * FROM ${table}`);
  },

  async getById(table, id) {
      return this.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
  },

  async insert(table, data) {
      if(!pool) return null;
      
      const keys = Object.keys(data);
      const values = Object.values(data);
      const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ');
      
      // JSON stringify complex objects if needed (handled by pg mostly, but good to be safe for JSONB)
      const formattedValues = values.map(v => (typeof v === 'object' && v !== null) ? JSON.stringify(v) : v);

      const query = `
          INSERT INTO ${table} (${keys.join(', ')})
          VALUES (${placeholders})
          RETURNING *
      `;
      
      return this.query(query, formattedValues);
  },

  async update(table, id, data) {
    if(!pool) return null;

    const updates = Object.keys(data).map((key, i) => `${key} = $${i + 2}`);
    const values = Object.values(data);
    
    // JSON fix
    const formattedValues = values.map(v => (typeof v === 'object' && v !== null) ? JSON.stringify(v) : v);

    const query = `
        UPDATE ${table}
        SET ${updates.join(', ')}
        WHERE id = $1
        RETURNING *
    `;
    
    return this.query(query, [id, ...formattedValues]);
  }
};
