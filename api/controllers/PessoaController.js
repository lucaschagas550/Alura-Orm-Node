//Neste formato ele busca na pasta models pelo arquivo index.js, semprecisa especificar o arquivo
const database = require("../models");

class PessoaController {
  static async pegaTodasAsRespostas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
