const ServicioPG = require("../services/postgress");

let consultarRoles = async () => {
    let _service = new ServicioPG();
    let sql = `SELECT * FROM roles`;
    let respuesta = await _service.ejecutarSql(sql);
    return respuesta;
};

let consultarRol = async (id) => {
    let _service = new ServicioPG();
    let sql = `SELECT * FROM roles WHERE id = '${id}'`;
    let respuesta = await _service.ejecutarSql(sql);
    return respuesta;
};

let validarRol = rol => {
    if (!rol) {
        throw {
            ok: false,
            mensaje: "La información del rol es obligatoria."
        };
    }
    if (!rol.nombre) {
        throw { ok: false, mensaje: "El nombre es obligatorio." };
    }

};

let guardarRol = async rol => {
    let _service = new ServicioPG();
    let sql = `INSERT INTO public.roles(id, nombre) VALUES ( $1, $2);`;
    let values = [rol.id, rol.nombre];
    let respuesta = await _service.ejecutarSql(sql, values);
    return respuesta;
};



let eliminarRol = id => {
    let _service = new ServicioPG();
    let sql = `DELETE FROM roles WHERE id= $1`;
    let values = [id];
    let respuesta = _service.ejecutarSql(sql, values);
    return respuesta;
};

let actualizarRol = async (rol, id) => {
    let _service = new ServicioPG();
    let sql = `UPDATE public.roles set id = $1, nombre = $2 WHERE id = $3`;
    let values = [rol.id, rol.nombre, id];
    let respuesta = await _service.ejecutarSql(sql, values);
    return respuesta;
};


module.exports = { consultarRoles, consultarRol, validarRol, guardarRol, actualizarRol, eliminarRol };