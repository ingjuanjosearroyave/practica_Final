//Importar express
const express = require("express");
const cors = require("cors");
//Inicializar librería
const app = express();
app.use(express.json());
app.use(cors());

//Endpoint
app.get("/", (req, res) => {
  res.send("Bienvenido al Taller de Arreglo y gestión de motos");
});

const vs = "/api/v1/";

const ruta_motos = require("./routes/motos");
app.use(vs,ruta_motos);

const ruta_mantenimientos = require("./routes/mantenimiento");
app.use(vs,ruta_mantenimientos);

//Puerto
const port = process.env.PORT || 3001;

//Levantamiento
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});
