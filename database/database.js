const Sequelize = require("sequelize");

const connection = new Sequelize("blog_node_ejs", "root", "rootroot", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
