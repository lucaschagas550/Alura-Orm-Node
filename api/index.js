const express = require("express");
const routes = require("./routes"); //Neste formato ele busca na pasta models pelo arquivo index.js, semprecisa especificar o arquivo

const app = express();
const port = 3000;

routes(app); 

app.listen(port, () => console.log("Up"));

module.exports = app;
