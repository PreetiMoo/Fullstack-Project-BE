const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("Bank", "root", "Preeti", {
  host: "localhost",
  dialect: "mysql" 
});


module.exports = sequelize;
