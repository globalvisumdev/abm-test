import mysql from "mysql2/promise"; 
import {
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST
} from "../config.js";

// Creaa una conexión pool a la base de datos
export const pool = await mysql.createConnection({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

