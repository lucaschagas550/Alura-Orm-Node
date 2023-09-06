const bodyParser = require("body-parser"); // converterá os dados que chegarão no corpo, no body das requisições
const pessoas = require("./pessoasRoute.js");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(pessoas);
  app.get("/", (req, res) => res.send("ola"));
};
