const Sequelize = require('sequelize');

const sequelize = new Sequelize('candyshop', 'root', 'Rajat@7208', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
