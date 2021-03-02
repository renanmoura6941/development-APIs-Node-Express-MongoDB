const { json } = require("express");
const express = require("express");
const routes = require("./routes");
const app = express();  


//body type json
app.use(express.json());

app.use(routes);


app.listen(3333);