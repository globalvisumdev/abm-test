import { DB_GUSTAVO_TEST } from "../db/db.js";

const POOL_GUSTAVO = await DB_GUSTAVO_TEST;

export class GustavoService {
  constructor() {}

  getUsuario = async (idUsuario) => {
 
    try {
    
        // Ejecutar el procedimiento almacenado
        const [rows] = await POOL_GUSTAVO.execute('CALL getUsuarios(?)', [idUsuario]);

        if (rows.length <= 0) {
            return rows;
        }
    
        // Procesar los resultados si es necesario
        console.log('Resultado del procedimiento almacenado:', rows[0]);
      } catch (error) {
        console.error('Error al ejecutar el procedimiento almacenado:', error);
      }
      
  };

  getUsuarios = async(documento) => {
    try {
    
        // Ejecutar el procedimiento almacenado
        const [rows] = await POOL_GUSTAVO.execute('SELECT * FROM entaxi_usuario_test WHERE eu_documento = ?', [documento]);

        if (rows.length <= 0) {
            return rows;
        }
    
        // Procesar los resultados si es necesario
        console.log('Resultado de la query:', rows);
      } catch (error) {
        console.error('Error al ejecutar la query:', error);
      }
      
  }


 



}

export default {};