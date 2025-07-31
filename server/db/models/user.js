'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  User.init({
    login: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};