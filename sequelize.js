const { Sequelize } = require("sequelize");
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const sequelize = new Sequelize( {
 dialect: 'sqlite',
 storage: path.resolve(__dirname, 'db.sqlite'),
 dialectModule: sqlite3
});


module.exports = sequelize;
