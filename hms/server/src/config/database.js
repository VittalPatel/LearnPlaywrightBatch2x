import pkg from 'pg';

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://hms_user:hms_password@localhost:5432/hms_db'
});
