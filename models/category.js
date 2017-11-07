"use strict";
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define("Category", {
    nome: DataTypes.STRING,
    cor: DataTypes.STRING
  });
  return Category;
};
