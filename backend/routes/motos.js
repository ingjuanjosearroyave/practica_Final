const express = require("express");
const router = express.Router();

const {
    consultarMotos,
    consultarMoto, validarMoto, guardarMoto, actualizarMoto, eliminarMoto } = require("../controllers/motos");

/**
 * Obtener todos los motos
 */
router.get("/motos", (req, res) => {
    consultarMotos()
        .then(answerDB => {
            let motos = answerDB.rows;
            res.send({ ok: true, info: motos, mensaje: "Motos consultadas" });
        })
        .catch(error => {
            res.send(error);
        });
});

router.get("/motos/:id", (req, res) => {
    let infoMoto = req.params.id;
    consultarMoto(infoMoto)
    .then(answerDB => {
      let motos = answerDB.rows;
      res.send({ ok: true, info: motos, mensaje: "Moto consultada" });  
    })
    .catch(error => {
      res.send(error);
    });   
  });

  router.post("/motos", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let info_moto = req.body;
        console.log(info_moto);
        
      // Valida la información, si hay un error se envia al catch
      validarMoto(info_moto);

      guardarMoto(info_moto)
        .then(answerDB => {
          res.send({ ok: true, mensaje: "Moto guardada", info: info_moto });
        })
        .catch(error => {
          res.send(error);
        });
    } catch (error) {
      res.send(error);
    }
  }); 

router.put("/motos/:id", (req, res) => {
    try {
      let id = req.params.id;
      let info_moto = req.body;
      actualizarMoto(info_moto, id)
        .then(answerDB => {
          res.send({ ok: true, mensaje: "Moto editada", info: info_moto });
        })
        .catch(error => {
          res.send(error);
        });
    } catch (error) {
      res.send(error);
    }    
  });
  
  router.delete("/motos/:id", (req, res) => {
    try {
      let info_moto = req.params.id;
      eliminarMoto(info_moto)
        .then(answerDB => {
          res.send({ ok: true, mensaje: "Moto eliminada", info: info_moto });
        })
        .catch(error => {
          res.send(error);
        });
    } catch (error) {
      res.send(error);
    }
    
  }); 

 //Exportación del router
module.exports = router; 