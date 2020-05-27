const express = require("express");
const router = express.Router();
const {
    consultarUsuarios,
    consultarUsuario, validarUsuario, guardarUsuario, actualizarUsuario, eliminarUsuario } = require("../controllers/usuarios");

router.get("/usuarios", (req, res) => {
    consultarUsuarios()
        .then(answerDB => {
            let records = answerDB.rows;
            res.send({ ok: true, info: records, mensaje: "Usuarios consultados" });
        })
        .catch(error => {
            res.send(error);
        });

});

/**
 * Obtener un solo usuario
 */
router.get("/usuarios/:id", (req, res) => {
    let info_usuario = req.params.id;
    consultarUsuario(info_usuario)
        .then(answerDB => {
            let records = answerDB.rows;
            res.send({ ok: true, info: records, mensaje: "Usuario consultado" });

        })
        .catch(error => {
            res.send(error);
        });

});

/**
 * Guardar un usuario
 */
router.post("/usuarios", (req, res) => {
    try {
        let info_usuario = req.body;
        validarUsuario(info_usuario);
        guardarUsuario(info_usuario)
            .then(answerDB => {
                res.send({ ok: true, mensaje: "Usuario guardado", info: info_usuario });
            })
            .catch(error => {
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }

});

/**
 * Eliminar un usuario
 */
router.delete("/usuarios/:id", (req, res) => {
    try {
        let info_usuario = req.params.id;
        eliminarUsuario(info_usuario)
            .then(answerDB => {
                res.send({ ok: true, mensaje: "Usuario eliminado", info: info_usuario });
            })
            .catch(error => {
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }

});

/**
* Actualizar un usuario
*/
router.put("/usuarios/:id", (req, res) => {
    try {
        let id = req.params.id;
        let info_usuario = req.body;
        actualizarUsuario(info_usuario, id)
            .then(answerDB => {
                res.send({ ok: true, mensaje: "Usuario editado", info: info_usuario });
            })
            .catch(error => {
                res.send(error);
            });

        // Responder
    } catch (error) {
        res.send(error);
    }

});


module.exports = router;