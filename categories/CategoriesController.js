const express = require("express");
const slugify = require("slugify");

const Category = require("./Category");

const router = express.Router();

router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
  const title = req.body.title;

  if (!title) {
    res.redirect("admin/categories/new");
  }

  Category.create({
    title: title,
    slug: slugify(title),
  }).then(() => {
    res.redirect("/");
  });
});

router.get("/admin/categories", (req, res) => {
  Category.findAll().then(categories => {
    res.render("admin/categories/index", { categories: categories });
  });
});

module.exports = router;