require("dotenv").config();
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(process.env.DATABASE_DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    dialectModule: require('pg'),
    dialectOptions: {
      ssl: {
        require: true, // This will enforce SSL usage
        rejectUnauthorized: false, // This option can be set to true or false based on your SSL certificate validation needs
      },
    },
  });
  


module.exports = sequelize;