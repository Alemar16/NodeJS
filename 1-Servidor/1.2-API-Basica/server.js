const express = require("express");
const app = express();

const PORT = 3000;

//Agrega una ruta GET para el punto de entrada de la API en /api y devuelve un mensaje de bienvenida:
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

//Agrega una ruta GET para obtener una lista de usuarios en /api/users:
const users = [
  {
    id: 1,
    name: "Julio Cesar",
    age: 25,
    country: "Roma",
  },
  {
    id: 2,
    name: "Marco Antonio",
    age: 30,
    country: "Roma",
  },
  {
    id: 3,
    name: "Pompeyo Antonio",
    age: 35,
    country: "Roma",
  },
  {
    id: 4,
    name: "sofocles Cipriano",
    age: 65,
    country: "Roma",
  }
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

//Agrega el código para que el servidor escuche en el puerto definido:
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
