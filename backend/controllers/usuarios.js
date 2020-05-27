const ServicioPG = require("../services/postgress");

let consultarUsuarios = async () => {
    let _service = new ServicioPG();
    let sql = `SELECT usuarios.tipo_documento, usuarios.documento, usuarios.nombre, usuarios.apellidos, usuarios.celular, usuarios.correo, usuarios.rol FROM usuarios`;
    let answer = await _service.ejecutarSql(sql);
    return answer;
};

let consultarUsuario = async (documento) => {
    let _service = new ServicioPG();
    let sql = `SELECT usuarios.tipo_documento, usuarios.documento, usuarios.nombre, usuarios.apellidos, usuarios.celular,
         usuarios.correo, usuarios.rol,
          usuarios.clave FROM usuarios WHERE documento = '${documento}'`;
    let respuesta = await _service.ejecutarSql(sql);
    return respuesta;
};

let validarUsuario = (usuario) => {
    if (!usuario) {
        throw {
            ok: false,
            mensaje: "La información de la persona es obligatoria.",
        };
    }
    if (!usuario.documento) {
        throw { ok: false, mensaje: "La cédula es obligatoria." };
    }
    if (!usuario.nombre) {
        throw { ok: false, mensaje: "El nombre es obligatorio." };
    }
    if (!usuario.apellidos) {
        throw { ok: false, mensaje: "Los apellidos son obligatorios." };
    }
    if (!usuario.celular) {
        throw { ok: false, mensaje: "El celular es obligatorio." };
    }
    if (!usuario.correo) {
        throw { ok: false, mensaje: "El correo es obligatorio." };
    }
    if (!usuario.rol) {
        throw { ok: false, mensaje: "El rol es obligatorio." };
    }
    if (!usuario.clave) {
        throw { ok: false, mensaje: "La contraseña es obligatoria." };
    }
};

let guardarUsuario = async (usuario) => {
    let _service = new ServicioPG();
    let sql = `INSERT INTO public.usuarios(
              tipo_documento, documento, nombre, apellidos, celular, correo, rol, clave)
              VALUES ( $1, $2, $3,$4,$5,$6,$7,md5($8));`;
    let values = [
        usuario.tipo_documento,
        usuario.documento,
        usuario.nombre,
        usuario.apellidos,
        usuario.celular,
        usuario.correo,
        usuario.rol,
        usuario.clave,
    ];
    let respuesta = await _service.ejecutarSql(sql, values);
    return respuesta;
};

let eliminarUsuario = (documento) => {
    let _service = new ServicioPG();
    let sql = `DELETE FROM usuarios WHERE documento = $1`;
    let values = [documento];
    let respuesta = _service.ejecutarSql(sql, values);
    return respuesta;
};

let actualizarUsuario = async (usuario, documento) => {
    let _service = new ServicioPG();
    let sql = `UPDATE usuarios set tipo_documento = $1,nombre = $2, apellidos = $3,celular = $4,correo = $5,rol = $6 WHERE documento = $7`;
    let values = [
        usuario.tipo_documento,
        usuario.nombre,
        usuario.apellidos,
        usuario.celular,
        usuario.correo,
        usuario.rol,
        documento,
    ];
    let respuesta = await _service.ejecutarSql(sql, values);
    return respuesta;
};

module.exports = { consultarUsuarios, consultarUsuario, validarUsuario, guardarUsuario, eliminarUsuario, actualizarUsuario };