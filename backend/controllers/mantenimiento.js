const ServicioPG = require("../services/postgress");


let consultarMantenimientos = async () => {
  let _service = new ServicioPG();
  let sql = `SELECT * FROM mantenimientos`;
  let respuesta = await _service.ejecutarSql(sql);
  return respuesta;
};

let consultarMantenimiento = async (id) => {
  let _service = new ServicioPG();
  let sql = `SELECT * FROM mantenimientos WHERE id_mecanico = '${id}'`;
  let respuesta = await _service.ejecutarSql(sql);
  return respuesta;
};

let validarMantenimiento = (mantenimiento) => {
  if (!mantenimiento) {
    throw {
      ok: false,
      mensaje: "La información del mantenimiento es obligatoria.",
    };
  }
  if (!mantenimiento.id_mecanico) {
    throw { ok: false, mensaje: "El id_mecanico es obligatorio." };
  }
  if (!mantenimiento.placa) {
    throw { ok: false, mensaje: "La placa es obligatoria." };
  }
  if (!mantenimiento.fecha) {
    throw { ok: false, mensaje: "La fecha es obligatoria." };
  }
};

let guardarMantenimiento = async (mantenimiento) => {
  let _service = new ServicioPG();
  let sql = `INSERT INTO public.mantenimientos(
                id_mecanico, placa, fecha, trabajos_realizados, horas_invertidas)
                VALUES (
                    $1,
                    $2,
                    $3,
                    $4,
                    $5);`;

  let values = [
    mantenimiento.id_mecanico,
    mantenimiento.placa,
    mantenimiento.fecha,
    mantenimiento.trabajos_realizados,
    mantenimiento.horas_invertidas,
  ];
  let respuesta = await _service.ejecutarSql(sql, values);
  return respuesta;
};

let eliminarMantenimiento = (mantenimiento) => {
  let _service = new ServicioPG();
  let sql = `DELETE FROM mantenimientos WHERE placa = $1`;
  let values = [id];
  let respuesta = _service.ejecutarSql(sql, values);
  return respuesta;
};

let actualizarMantenimiento = async (mantenimiento) => {
  if (mantenimiento.placa != placa) {
    throw {
      ok: false,
      mensaje: "La placa de la moto no corresponde al enviado",
    };
  }
  let _service = new ServicioPG();
  let sql = "UPDATE public.mantenimientos set id_mecanico = $1"+
  "placa = $2,fecha = $3,trabajos_realizados = $4, horas_invertidas = $5 where placa = $6 ";
  let values = [
    mantenimiento.id_mecanico,
    mantenimiento.placa,
    mantenimiento.fecha,
    mantenimiento.trabajos_realizados,
    mantenimiento.horas_invertidas,
    placa
  ];
  let respuesta = await _service.ejecutarSql(sql, values);
  return respuesta;
};

module.exports = { consultarMantenimientos, consultarMantenimiento, validarMantenimiento, guardarMantenimiento, eliminarMantenimiento, actualizarMantenimiento };