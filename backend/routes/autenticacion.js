const express = require("express");
const router = express.Router();
const _controlador = require("../controllers/autenticacion");

router.use((req, res, next) => {
  try {
    let url = req.url;
    if (url === "/login") {
      next();
    } else {
      let token = req.headers.token;
      let verify = _controlador.validarToken(token);
      next();
    }
  } catch (error) {
    res.status(401).send({ ok: false, info: error, message: "No autenticado" });
  }
});

router.post("/login", (req, res) => {
  try {
    let body = req.body;
    _controlador.validarDatos(body);
    _controlador
      .consultarUsuario(body)
      .then((answerDB) => {
        let usuario = answerDB.rowCount > 0 ? answerDB.rows[0] : undefined;

        if (usuario) {
          let token = _controller.generarToken(usuario);
          res.status(200).send({
            ok: true,
            info: token,
            rol: usuario.rol,
            message: "Usuario autenticado",
          });
        } else {
          res.status(400).send({
            ok: false,
            info: {},
            message: "Documento y/o clave incorrecta.",
          });
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/verify", (req, res) => {
  try {
    let token = req.headers.token;
    let verify = _controlador.validarToken(token);
    res.status(200).send({
      ok: true,
      info: verify,
      mensaje: "Autenticado.",
    });
  } catch (error) {
    res.status(401).send({
      ok: false,
      info: error,
      mensaje: "No autenticado.",
    });
  }
});

module.exports = router;