const express = require("express");
const app = express();

app.get("/", function(requisicao, resposta){
   resposta.send("Bem-vindo ao guia do programador!");
});

app.get("/blog", function(requisicao, resposta){
    resposta.send("Bem-vindo ao meu blog!");
});

app.get("/canal/youtube", function(requisicao, resposta){
    resposta.send("Bem-vindo ao meu canal!");
});

app.listen(3000, function(error){
    if(error){
        console.log("Error");
    }else{
        console.log("Server started sucessufully");
    }
});

