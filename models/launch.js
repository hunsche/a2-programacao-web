module.exports = (sequelize, DataTypes) => {
  var Launch = sequelize.define(
    "Launch",
    {
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      category: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      value: DataTypes.DECIMAL(10, 2),
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
