import * as path from "path";
import { PORT } from "./src/config.js";
import { fileURLToPath } from 'url';
import { siblings } from "dom7";

// Importaciones para el OAuth
import express, { json } from "express";
import session from 'express-session';
import morgan, { token } from "morgan";
import { v4 as uuidv4 } from 'uuid';
import { errorHandler } from "./middleware/errorHandler.js";

//Importaciones de las rutas
import sessionRoutes from "./routes/session.routes.js";

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

// Define la configuracion de la sesion
var sess = {
    secret: 'keyboard cat',
    cookie: {
        maxAge: 1800000  // tiempo maximo de la cookie de sesion
    },
    genid: function(req) {
        return uuidv4(); // Utiliza UUIDs para IDs de sesión
    },
    resave: false, // Evita que se vuelva a guardar la sesión en el almacén si no hay cambios
    saveUninitialized: true // Guarda una sesión aunque no se haya inicializado
}

// Configura el proxy de confianza y la seguridad de las cookies en producción
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // Confía en el primer proxy
    sess.cookie.secure = true // Sirve cookies seguras
}

// Usa express-session middleware con la config anterior
app.use(session(sess))

// Routes
app.use("/session", sessionRoutes);
app.use(errorHandler); // Manejo de errores 

export default {
    app
};