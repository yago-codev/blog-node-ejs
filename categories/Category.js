const Sequelize = require("sequelize");

const connection = require("../database/database");

const Category = connection.define('categories', {
  title: {
    type: Sequelize.STRING,
    allowNull: false, // Não permite que o campo seja nulo
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Sincronizando o model com banco de dados para criar os relacionamentos no banco de dados
// force: true -> vai fazer com que as alterações do model sejam refletidas no banco toda vez que o arquivo for salvo
// Category.sync({ force: true });

module.exports = Category;