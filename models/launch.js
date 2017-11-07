module.exports = (sequelize, DataTypes) => {
  var Launch = sequelize.define(
    "Launch",
    {
      // date: {
      //   type: DataTypes.DATE,
      //   defaultValue: DataTypes.NOW
      // },
      categoria_id: DataTypes.INTEGER,
      descricao: DataTypes.TEXT,
      valor: DataTypes.DECIMAL(10, 2),
      tipo: DataTypes.TEXT 
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
