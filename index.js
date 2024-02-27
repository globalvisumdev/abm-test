import * as APP_CONFIG from "./app.js"
import cors from "cors";

import { PORT } from "./src/config.js";

import { GustavoService } from "./src/services/gustavo.service.js";
 
const gustavoService = new GustavoService();

// gustavoService.getUsuario(6300)
gustavoService.getUsuarios(23)

const allowedOrigins = [
    "http://172.16.0.231",
];

const app = APP_CONFIG.default.app;

const CORS = {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

// Configurar CORS
app.use(cors(CORS));

// Para evitar que se detenga el servidor si hay un erorr
process.on('uncaughtException', function (err) {
    console.log('Error no capturado:', err);
});

app.listen(PORT, () => {
    console.log(`Server running at http://172.16.0.231:${PORT}/`);
});
