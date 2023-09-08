"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    static associate(models) {
      Matriculas.belongsTo(models.Pessoas, {
        foreignKey: "estudante_id",
      });
      Matriculas.belongsTo(models.Turmas, {
        foreignKey: "turma_id",
      });
    }
  }
  Matriculas.init(
    {
      status: DataTypes.STRING,
    },
    {
      paranoid: true, // se for true nenhum registro da tabela realmente eh apagado
      sequelize,
      modelName: "Matriculas",
    }
  );
  return Matriculas;
};
