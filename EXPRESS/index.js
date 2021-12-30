const express = require("express");
const app = express();

app.get("/", function(requisicao, resposta){
   resposta.send("Bem-vindo ao guia do programador!");
   //resposta.send("Outra resposta");
});

app.get("/blog/:artigo?", function(requisicao, resposta){
    
    var artigo = requisicao.params.artigo;
    if(artigo){
        resposta.send("artigo: " + artigo)
    }else{
        resposta.send("Bem-vindo ao meu blog!");
    }
});

app.get("/canal/youtube", function(requisicao, resposta){
    var canal = requisicao.query["canal"];
    if(canal){
        resposta.send(canal);
    }else{
        resposta.send("Nenhum cana fornecido!");
    }
});

app.get("/ola/:nome/:empresa", function(req, res){
    
    nome = req.params.nome;
    empresa = req.params.empresa;
    res.send("Bem vindo " + nome + " do " + empresa) ;
});

app.listen(3000, function(error){
    if(error){
        console.log("Error");
    }else{
        console.log("Server started sucessufully");
    }
});

