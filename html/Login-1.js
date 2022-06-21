var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/login.html");
})

app.post("/login", function(req, res) {
    var nome = req.body.name;
    var password = req.body.password;
    if (nome == "admin" && password == "123") {
        res.send("Bem vindo " + nome);
    } else {
        res.send("Usuário ou senha inválidos");
    }
})

app.listen(3000, function(req, res) {
    console.log("Server running on port 3000");
})