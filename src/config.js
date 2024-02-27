import * as path from "path"; // Para manejar rutas de archivos.
import { config } from "dotenv"; // Para cargar variables de entorno desde un archivo '.env'.
import { fileURLToPath } from 'url'; // Para convertir una URL en una ruta de archivo.

// Obtiene el directorio actual 
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Crea la ruta del archivo 
const envPath = path.join(__dirname, '..', `.env.${process.env.CLIENT}`);

// Carga las variables de entorno del archivo '.env' utilizando la función 'config' de 'dotenv'.
config();
config({ path: envPath });

// Exporta las variables de entorno como constantes para que estén disponibles en otros archivos.
export const DB_USER= process.env.DB_USER;
export const DB_PASSWORD= process.env.DB_PASSWORD;
export const DB_HOST= process.env.DB_HOST;
export const DB_DATABASE= process.env.DB_DATABASE;
export const PORT= process.env.PORT;

// Esta línea exporta un objeto vacío para que los otros exports estén disponibles cuando se importe este archivo.
export default {};
