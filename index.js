const express = require("express");

const app = express();

// View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Bem vindo ao meu site");
});

app.listen(8080, () => {
  console.log("Servidor rodando com sucesso!");
});
