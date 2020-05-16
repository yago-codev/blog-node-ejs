const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const connection = require("./database/database");

const app = express();

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

// View Engine
app.set("view engine", "ejs");

// Arquivos Estáticos
app.use(express.static("public"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

// JSON
app.use(bodyParser.json());

// Autenticação Banco de Dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

// Rotas
app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("Servidor rodando com sucesso!");
});