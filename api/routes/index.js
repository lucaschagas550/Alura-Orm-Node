const bodyParser = require("body-parser"); // converterá os dados que chegarão no corpo, no body das requisições
const pessoas = require("./pessoasRoute.js");
const niveis = require("./niveisRoute.js");
const turmas = require("./turmasRoute.js");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(pessoas);
  app.use(niveis);
  app.use(turmas);
  app.get("/", (req, res) => res.send("ola"));
};
