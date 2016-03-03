var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "jade");


app.get("/login", function(req, res) {
    res.render("login");
});

app.post("/login", function(req, res){
    console.log(req.body.usuario);
    console.log(req.body.password);
    var num = req.body.num;
    if(num===999){
        res.send("Sesión Iniciada");
    }else{
        res.status(400);
        res.send("Error de autenticación");
    }
});

app.listen(8080);