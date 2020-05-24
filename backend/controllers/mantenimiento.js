const ServicioPG = require("../services/postgress");


let consultarMantenimientos = async () => {
    let _service = new ServicioPG();
    let sql = `SELECT * FROM mantenimientos`;
    let respuesta = await _service.ejecutarSql(sql);
    return respuesta;
  };
  
  let consultarMantenimiento = async (id) => {
    let _service = new ServicioPG();
    let sql = `SELECT * FROM mantenimientos WHERE id = '${id}'`;
    let respuesta = await _service.ejecutarSql(sql);
    return respuesta;
  };



module.exports = {consultarMantenimientos,consultarMantenimiento};