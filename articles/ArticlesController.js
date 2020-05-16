const express = require("express");

const router = express.Router();

router.get("/articles", (req, res) => {
  res.send("Rota de Artigos");
});

router.get("/admin/articles/new", (req, res) => {
  res.send("Rota para Criar um Novo Artigo");
});

module.exports = router;