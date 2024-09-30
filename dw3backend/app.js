const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes"); // Verifique se o caminho está correto
require("dotenv").config();

const app = express();
const port = 40000;

app.use(express.json());
app.use(router); // Usando o router exportado

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});
