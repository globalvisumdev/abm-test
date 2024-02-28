class Usuario {
    constructor(nombre, password) {
      this._nombre = nombre;
      this._password = password;
    }
  
    // Getter para obtener el nombre del usuario
    get nombre() {
      return this._nombre;
    }
  
    // Getter para obtener la contraseña del usuario
    get password() {
      return this._password;
    }
  }

export default Usuario;