const express = require("express");
const app = express();

const PORT = 3002;

const routes = require("./src/routes/routes.js");

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
