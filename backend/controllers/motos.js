const ServicioPG = require("../services/postgress");

let consultarMotos = async () => {
    let _service = new ServicioPG();
    let sql = `SELECT * FROM motos`;
    let answer = await _service.ejecutarSql(sql);
    return answer;
};

let consultarMoto = async (placa) => {
    let _service = new ServicioPG();
    let sql = `SELECT * FROM motos WHERE placa = '${placa}'`;
    let respuesta = await _service.ejecutarSql(sql);
    return respuesta;
};

let validarMoto = (moto) => {
    if (!moto) {
      throw {
        ok: false,
        mensaje: "La información de la moto es obligatoria.",
      };
    }
  
    if (!moto.placa) {
      throw { ok: false, mensaje: "La placa es obligatoria." };
    }
    if (!moto.estado) {
      throw { ok: false, mensaje: "El estado es obligatorio." };
    }
    if (!moto.clase) {
      throw { ok: false, mensaje: "La clase es obligatoria." };
    }
    if (!moto.marca) {
      throw { ok: false, mensaje: "El marca es obligatorio." };
    }
    if (!moto.modelo) {
      throw { ok: false, mensaje: "El modelo es obligatorio." };
    }
    if (!moto.color) {
      throw { ok: false, mensaje: "El color es obligatorio." };
    }
    if (!moto.cilindraje) {
      throw { ok: false, mensaje: "El cilindraje es obligatorio." };
    }
    if (!moto.id_propietario) {
      throw { ok: false, mensaje: "El id propietario es obligatorio." };
    }
    if (!moto.nro_soat) {
      throw { ok: false, mensaje: "El nro de soat es obligatorio." };
    }
    if (!moto.vencimiento_soat) {
      throw {
        ok: false,
        mensaje: "La fecha de vencimiento del soat es obligatoria.",
      };
    }
    if (!moto.nro_tecnomecanica) {
      throw { ok: false, mensaje: "El nro técnicomecanico es obligatorio." };
    }
    if (!moto.vencimiento_tecnomecanica) {
      throw {
        ok: false,
        mensaje:
          "La fecha de vencimiento del chequeo técnicomecanico es obligatoria.",
      };
    }
  };

  let guardarMoto = async (moto) => {
    let _service = new ServicioPG();
    let sql = `INSERT INTO public.motos(placa, estado, clase, marca, modelo, color, cilindraje, id_propietario, nro_soat, vencimiento_soat, nro_tecnomecanica, vencimiento_tecnomecanica)
                VALUES ($1,
                    $2,
                    $3,
                    $4,
                    $5,
                    $6,
                    $7,
                    $8,
                    $9,
                    $10,
                    $11,
                    $12);`;
    let values = [
      moto.placa,
      moto.estado,
      moto.clase,
      moto.marca,
      moto.modelo,
      moto.color,
      moto.cilindraje,
      moto.id_propietario,
      moto.nro_soat,
      moto.vencimiento_soat,
      moto.nro_tecnomecanica,
      moto.vencimiento_tecnomecanica,
    ];
    let respuesta = await _service.ejecutarSql(sql, values);
    return respuesta;
  };

  let actualizarMoto = async (moto, placa) => {
  if (moto.placa != placa) {
    throw {
      ok: false,
      mensaje: "La placa de la moto no corresponde al enviado",
    };
  }
  let _servicio = new ServicioPG();
  let sql =
    "UPDATE public.motos set estado =$1," +
    "clase =$2, marca =$3, modelo =$4, color =$5, cilindraje =$6, id_propietario =$7, nro_soat =$8, vencimiento_soat =$9, nro_tecnomecanica =$10, vencimiento_tecnomecanica =$11 WHERE placa = $12;";
  let valores = [
    moto.estado,
      moto.clase,
      moto.marca,
      moto.modelo,
      moto.color,
      moto.cilindraje,
      moto.id_propietario,
      moto.nro_soat,
      moto.vencimiento_soat,
      moto.nro_tecnomecanica,
      moto.vencimiento_tecnomecanica,
      placa,
  ];
  let respuesta = await _servicio.ejecutarSql(sql, valores);

  return respuesta;
};


  let eliminarMoto = (placa) => {
    let _service = new ServicioPG();
    let sql = `DELETE FROM motos WHERE placa = $1`;
    let values = [placa];
    let respuesta = _service.ejecutarSql(sql, values);
    return respuesta;
  };


module.exports = { consultarMotos, consultarMoto, validarMoto, guardarMoto, actualizarMoto, eliminarMoto };