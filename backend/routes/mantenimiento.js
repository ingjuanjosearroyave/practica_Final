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

module.exports = router; 