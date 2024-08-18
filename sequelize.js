const { Sequelize } = require("sequelize");
const sqlite3 = require('sqlite3').verbose();


const sequelize = new Sequelize( {
 dialect: 'sqlite',
 storage: './database.sqlite',
 dialectModule: sqlite3
});


module.exports = sequelize;
