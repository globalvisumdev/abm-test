import Usuario from "../src/models/usuario.entity.js"
import { pool }  from "../src/db/db.js";


export const getSession = async (req, res) => {
  try {
    const usuario = req.session.usuario;
    if (usuario) {
        usuario = new Usuario("nuevoUsuario", "nuevaContraseña123");
        req.session.usuario = usuario;
        res.json(req.session);
    } else {
       return res.status(404).json({ message: "Variable de sesión no establecida" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const sessionStart = async (req, res) => {
  try {
    if(!req.session.usuario){
      req.session.usuario = new Usuario("juan", "1234")
      req.session.activa = true
      res.json(req.session);
    } else {
      req.session.body = "sigue logueado"
      res.json(req.session);
    }
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const sessionFinish = async (req, res) => {
  try {
    if (req.session.usuario){
      req.session.usuario = false
      req.session.activa = false
      res.json(req.session);

    } else {
      req.session.activa = false
      req.session.body = "no sigue logueado"
      res.json(req.session);

    }
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
}

export const getUsuarios = async (req, res) => {
  try {
    // duda: pq aca no lo tengo que definir con {} si tmb es una propiedad de session 
    const usuarios = await pool.query("SELECT * FROM gustavo_test.entaxi_usuario_test")
    req.session.usuarios = usuarios
    res.json(req.session)
  } catch (error) {
    return res.status(500).json({ message: "Something goses wrong" });
  }
}

export const getUsuarioID = async (req, res) => {
  try {
    // duda: porque aca lo tengo que definir con {} 
    const { id } = req.params; 
    const usuarios = await pool.execute("SELECT * FROM gustavo_test.entaxi_usuario_test WHERE eu_id = ?" , [id])
    req.session.usuarios = usuarios
    res.json(req.session)
  } catch (error) {
    return res.status(500).json({ message: "Something goses wrong" });
  }
}

export const createUser = async (req, res) => {
  try {
    const { nombre, apellido } = req.params;
    // Crear un nuevo usuario
    // duda: como pasarle parametros sin que sea por url, sino cuando se llame a esta funcion digamos

    // Como llamar a la funcion con parametros y sin parametros? (no exactamente esta pero como se hace?)
    const nuevoUsuario = new Usuario("nuevoUsuario", "nuevoueva123");
    const creado = await pool.query("INSERT INTO entaxi_usuario_test (eu_nombre, eu_apellido) VALUES (?,?)", [nuevoUsuario.nombre, nuevoUsuario.apellido ]) 

    // Almacenar el nuevo usuario en la sesión
    req.session.usuario = nuevoUsuario;
    if (creado){
      req.session.creado = true
      res.json(req.session)
    } else {
      req.session.creado = false
      res.json(req.session)
    }
  } catch (error) {
    return res.status(500).json({ message: "Something goses wrong" });
  }
}

export const sessionStarter = async (req, res) => {
  try {
    const { id } = req.params; // session/starter/1
  
    if (req.session.views) {
      req.session.views++;
      req.session.params = id;
      res.json(req.session);
    } else {
      req.session.views = 1
      res.json(req.session);
    }

  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const sessionStartUser = async (req, res) => {
  try {

    if (!req.session) {
        // Si la sesión no está definida, devuelve un mensaje de error
        return res.status(500).json({ message: "Sesión no inicializada" });
    }
    // Crear un nuevo usuario
    const nuevoUsuario = new Usuario("nuevoUsuario", "nuevaContraseña123");

    // Almacenar el nuevo usuario en la sesión
    req.session.usuario = nuevoUsuario;

    res.json({
      ok: true,
      message: "User created successfully"
    });

  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const sessionDestroy = async (req, res) => {
  req.session.destroy(function(err) {
    // cannot access session here
      res.json({
        ok: true,
        message: "Session destroy successfully"
      });
  })
};

export const sessionReload = async (req, res) => {
  req.session.reload(function(err) {
    res.json({
      ok: true,
      message: "Session reload successfully"
    });
  })
};

export const sessionRegenerate = async (req, res) => {
  req.session.regenerate(function(err) {
    res.json({
      ok: true,
      message: "Session regenerate successfully"
    });
  })
};