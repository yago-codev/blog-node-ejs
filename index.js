const express = require("express");

const app = express();

// View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("Servidor rodando com sucesso!");
});
