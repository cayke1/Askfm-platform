const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','@@@g230GG', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;