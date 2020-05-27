const express = require("express");
const router = express.Router();
const {
    consultarRoles,
    consultarRol, validarRol, guardarRol, actualizarRol, eliminarRol } = require("../controllers/roles");

router.get("/roles", (req, res) => {
    consultarRoles()
        .then(answerDB => {
            let records = answerDB.rows;
            res.send({ ok: true, info: records, mensaje: "Roles consultados" });

        })
        .catch(error => {
            res.send(error);
        });
});


router.get("/roles/:id", (req, res) => {
    let info_role = req.params.id;
    consultarRol(info_role)
        .then(answerDB => {
            let records = answerDB.rows;
            res.send({ ok: true, info: records, mensaje: "Rol consultado" });
        })
        .catch(error => {
            res.send(error);
        });
});

router.post("/roles", (req, res) => {
    try {
        let info_role = req.body;
        console.log(info_role);
        
        validarRol(info_role);
        console.log(info_role);
        
        guardarRol(info_role)
            .then(answerDB => {                
                res.send({ ok: true, mensaje: "Rol guardado", info: info_role });
            })
            .catch(error => {
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }
});

router.put("/roles/:id", (req, res) => {
    try {
        let id = req.params.id;
        let info_role = req.body;
        console.log(info_role);
        
        actualizarRol(info_role, id)
            .then(answerDB => {
                res.send({ ok: true, mensaje: "Rol editado", info: info_role });
            })
            .catch(error => {
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }
});

router.delete("/roles/:id", (req, res) => {
    try {
        let info_role = req.params.id;

        eliminarRol(info_role)
            .then(answerDB => {
                res.send({ ok: true, mensaje: "Rol eliminado", info: info_role });
            })
            .catch(error => {
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;