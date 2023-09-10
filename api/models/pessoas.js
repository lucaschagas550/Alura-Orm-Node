"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "docente_Id",
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
        scope: { status: "confirmado" }, // Por esse campo sera sera filtrado por onde tem status confirmado, se for chamado o scopo
        as: "aulasMatriculadas", //Alias para o nome do scope, para ser chamado no controller por exemplo
      });
    }
  }
  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          funcaoValidadora: function (dado) {
            // funcao personalizada para validacao, basta indicar um nome(no caos eh funcaoValidadora) e escrever
            if (dado.length <= 3)
              throw new Error("o campo deve ter mais que 3 caracteres");
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          // Validations do sequelize, ver na documentacao
          isEmail: {
            args: true,
            msg: "dados do tipo e-mail invalido",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      paranoid: true,
      defaultScope: {
        //Define que por padrao as query de select(tem como alterar isso no select tbm caso precise, para retornar os false tbm), vai retornar apenas quem tem o ativo como true
        where: { ativo: true },
      },
      scopes: {
        // Outro scope onde eh possivel retornar todos os objetos, sem where
        todos: { where: {} },
      },
      sequelize,
      modelName: "Pessoas",
    }
  );
  return Pessoas;
};
