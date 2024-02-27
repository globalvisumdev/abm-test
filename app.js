import * as path from "path";
import { PORT } from "./src/config.js";
import { fileURLToPath } from 'url';
import express from "express";
import morgan from "morgan";
import { siblings } from "dom7";

const __dirname = path.dirname(fileURLToPath(import.meta.url));


// Crear app con express y utilizar morgan para ver las peticiones

const app = express();

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
    app
};

