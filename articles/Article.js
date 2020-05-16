const Sequelize = require("sequelize");

const connection = require("../database/database");

const Category = require("../categories/Category");

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article); // Relacionamento Muitos pra 1
Article.belongsTo(Category); // Relacionamento 1 pra 1

// Sincronizando o model com banco de dados para criar os relacionamentos no banco de dados
// force: true -> vai fazer com que as alterações do model sejam refletidas no banco toda vez que o arquivo for salvo
// Article.sync({ force: true });

module.exports = Article;