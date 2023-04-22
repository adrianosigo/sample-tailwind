// declarar constante express
const express = require("express");
// declarar constante app
const app = express();
// declarar constante port
const port = 3000;

// definir caminho para a pasta public
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// definir view engine ejs
app.set("view engine", "ejs");

// middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => console.log("Server running on port " + port));
