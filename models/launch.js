"use strict";
module.exports = (sequelize, DataTypes) => {
  var Launch = sequelize.define(
    "Launch",
    {
      id: DataTypes.INTEGER,
      date: DataTypes.DATE,
      category: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      value: DataTypes.DECIMAL(10, 2).associate,
      type: {
        type: DataTypes.ENUM,
        values: ["expense", "recipe"]
      }
    },
    {
      classMethods: {
        associate: function(models) {
          category.belongsTo(models.Category);
        }
      }
    }
  );
  return Launch;
};
