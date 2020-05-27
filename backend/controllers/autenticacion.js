const ServicioPG = require("../services/postgress");
const jwt = require('jsonwebtoken');

const SECRET_KEY = "62dd9f018fdcfae7e7f1c8c7c8d253c7ddadbe85a3e20a57fc4003d9477fe093";

let validarDatos = (usuario) => {
  if (!usuario) {
    throw {
      ok: false,
      mensaje: "La información es obligatoria",
    };
  } else if (!usuario.documento) {
    throw {
      ok: false,
      mensaje: "La cedula es obligatoria",
    };
  } else if (!usuario.clave) {
    throw {
      ok: false,
      mensaje: "La contraseña es obligatoria",
    };
  }
};

let consultarUsuario = async (usuario) => {
  let _service = new servicioPg();
  let sql = `SELECT * FROM usuarios WHERE documento = $1 AND clave = md5($2)`;
  let values = [usuario.documento, usuario.clave];
  let respuesta = await _service.ejecutarsql(sql, values);
  return respuesta;
};
let generarToken = (usuario) => {
  delete usuario.clave;
  let token = jwt.sign(usuario, SECRET_KEY, { expiresIn: "2h" });
  return token;
};

let descifrarToken = (token) => {
  return jwt.decode(token, SECRET_KEY);
};
let validarToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

module.exports = {validarDatos,consultarUsuario,generarToken,validarToken,descifrarToken};
