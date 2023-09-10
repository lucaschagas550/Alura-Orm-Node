const database = require("../models");
const Sequelize = require("sequelize"); //Obtendo o sequelize
const Op = Sequelize.Op; //Operadores do sequelize como maior menor, menor maior etc

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    try {
      const { data_inicial, data_final } = req.query; //pega valores da querystring
      const where = {};

      data_inicial || data_final ? (where.data_inicio = {}) : null; // adiciona propriedade de data_inicio para o where
      data_inicial ? (where.data_inicio[Op.gte] = data_inicial) : null;
      data_final ? (where.data_inicio[Op.lte] = data_final) : null;

      const todasAsTurmas = await database.Turmas.findAll({ where });
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
module.exports = TurmaController;
