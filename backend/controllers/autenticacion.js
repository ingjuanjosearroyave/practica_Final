const servicePg = require("../services/postgress");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "62dd9f018fdcfae7e7f1c8c7c8d253c7ddadbe85a3e20a57fc4003d9477fe093";

let validar_datos = (usuario) => {
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

let consultar_usuario = async (usuario) => {
  let _service = new servicePg();
  let sql = `SELECT tipo_documento, documento, nombre, apellidos, celular, correo, rol, clave
    FROM public.usuarios where documento = $1 and clave = md5($2)`;
  let values = [usuario.documento, usuario.clave];
  let respuesta = await _service.ejecutarSql(sql, values);
  return respuesta;
};

let generar_token = (usuario) => {
  delete usuario.clave;
  let token = jwt.sign(usuario, SECRET_KEY, { expiresIn: "4h" });
  return token;
};

let descifrar_token = (token) => {
  return jwt.decode(token, SECRET_KEY);
};
let validar_token = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

module.exports = {
  validar_datos,
  consultar_usuario,
  generar_token,
  validar_token,
  descifrar_token,
};
