const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); 

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull:true,
    defaultValue: 0,
  },
  usertype: {
    type: DataTypes.ENUM('banker','customer'),
    allowNull: false,
  },
}, {
  tableName: 'Users', 
  timestamps: false,
});

const USER_TYPE ={BANKER:"banker", CUSTOMER:"customer"}
User.USER_TYPE = USER_TYPE

module.exports = User;
