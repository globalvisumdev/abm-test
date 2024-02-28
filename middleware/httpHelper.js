// Enum para códigos HTTP comunes
export const HttpStatusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

/**
 * Función de utilidad para enviar respuestas HTTP.
 * @param {object} res - Objeto de respuesta HTTP.
 * @param {number} status - Código de estado HTTP.
 * @param {object} data - Datos a enviar en la respuesta.
 */
export const sendResponse = (res, status, data) => {
    res.status(status).json(data);
};
