import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

import express from "express";
import morgan from "morgan";
import { siblings } from "dom7";

// Incializar varialbes de entorno globales y del CLIENTE

//apenas inicia la aplicacion toma las variables de entorno definidas en el archivo .env
dotenv.config(); 

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', `.env.${process.env.CLIENT}`);
dotenv.config({ path: envPath });


// Crear app con express y utilizar morgan para ver las peticiones

const app = express();

const PORT = process.env.PORT || 3000
// settings
app.set("port", PORT);

// Define el directorio raíz para los archivos estáticos
app.use(express.static(path.join(__dirname, 'www')));


// Middlewares
app.use(morgan("dev")); //para ver por consola las peticiones al servidor
app.use(express.urlencoded({ extended: false })) // para poder entender las peticiones de los formularios
app.use(express.json()) // para poder entender las peticiones y mostrar en formato json

// Routes
// app.use(require("./routes/index.routes.js")) // todavia no se utiliza

export default {
    app,
    PORT
};

