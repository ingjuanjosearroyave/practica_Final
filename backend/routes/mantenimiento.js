const express = require("express");
const router = express.Router();
const {
    consultarMantenimientos,
    consultarMantenimiento, validarMantenimiento, guardarMantenimiento, actualizarMantenimiento, eliminarMantenimiento } = require("../controllers/mantenimiento");

router.get("/mantenimientos", (req, res) => {
    consultarMantenimientos()
        .then(answerDB => {
            let mantenimientos = answerDB.rows;
            res.send({ ok: true, info: mantenimientos, mensaje: "Mantenimientos consultados" });
        })
        .catch(error => {
            res.send(error);
        });
});

router.get("/mantenimientos/:id", (req, res) => {
    let infoMantenimiento = req.params.id;
    consultarMantenimiento(infoMantenimiento)
        .then(answerDB => {
            let mantenimiento = answerDB.rows;
            res.send({ ok: true, info: mantenimiento, mensaje: "Mantenimiento consultado" });
        })
        .catch(error => {
            res.send(error);
        });
});

router.post("/mantenimientos", (req, res) => {
    try {
        let info_mantenimiento = req.body;

        validarMantenimiento(info_mantenimiento);

        guardarMantenimiento(info_mantenimiento)
            .then((answerDB) => {
                res.send({
                    ok: true,
                    mensaje: "mantenimiento guardado",
                    info: info_mantenimiento,
                });
            })
            .catch((error) => {
                res.send(error);
            });

        // Responder
    } catch (error) {
        res.send(error);
    }
});

router.delete("/mantenimientos/:id", (req, res) => {
    try {
        let info_mantenimiento = req.body;

        eliminarMantenimiento(info_mantenimiento)
            .then((answerDB) => {
                res.send({
                    ok: true,
                    mensaje: "Mantenimiento eliminado",
                    info: info_mantenimiento,
                });
            })
            .catch((error) => {
                res.send(error);
            });

        // Responder
    } catch (error) {
        res.send(error);
    }
});

router.put("/mantenimientos/:id", (req, res) => {
    try {
      let info_mantenimiento = req.body;
      actualizarMantenimiento(info_mantenimiento)
        .then((answerDB) => {
          res.send({
            ok: true,
            mensaje: "Mantenimiento Actualizado",
            info: info_mantenimiento,
          });
        })
        .catch((error) => {
          res.send(error);
        });
    } catch (error) {
      res.send(error);
    }
  });

module.exports = router; 