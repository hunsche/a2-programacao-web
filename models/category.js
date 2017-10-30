"use strict";
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define("Category", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  });
  return Category;
};
