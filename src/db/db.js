import mysql from "mysql2/promise"; 
import {
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST
} from "../config.js";

// Creaa una conexión pool a la base de datos
async function createPoolConnection(config) {
  try {
    // Crea un pool de conexiones utilizando la configuración proporcionada
    const pool = await mysql.createPool(config);

    // Obtiene una conexión del pool y la libera inmediatamente para comprobar la conectividad con la base de datos
    pool.getConnection(function(err, connection) {
        if (err) {
          console.error('Error al conectar a la base de datos: ' + err.stack);
          return;
        }
        console.log('Conexión a la base de datos establecida con éxito');
        connection.release(); // Libera la conexión después de comprobarla
      });

    console.log('Conectado a la base de datos');
    return pool;    
  } catch (err) {
    console.error('Database Connection Failed! Bad Config: ', err); 
    throw err; 
  }
}

export const DB_GUSTAVO_TEST = createPoolConnection({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default {};
