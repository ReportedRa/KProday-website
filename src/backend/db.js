import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "3021",
    host: "localhost",
    port: 5432,
    database: "postgres"
})

export default pool