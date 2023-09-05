const express = require("express");
const bodyParser = require("body-parser"); // converterá os dados que chegarão no corpo, no body das requisições

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/teste", (req, res) => res.status(200).send({ mensagem: "ola" }));

app.listen(port, () => console.log("Up"));

module.exports = app;
