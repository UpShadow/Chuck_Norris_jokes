import express from "express";
import { appendFile } from 'fs';
import fs from 'fs/promises'
const chuck = await fs.readFile("./chuck.json");
let jchuck = JSON.parse(chuck);
const app = express();

//function random joke
function RandomJoke(dados) {
    let RJ = Math.round(Math.random()*107);
    return dados.result[RJ].value;
}

//function filter joke
function FilterJoke(dados, filter) {
    let jokes = [];
    for(let p of dados.result)
        if(p.value.includes(filter))
            jokes.push(p.value);
    return jokes;   
}

app.get("/Random-Joke", (req,res) => {
    let joke = RandomJoke(jchuck);
    res.send(`${joke}`);    
})

app.get("/Filter-Joke/:filter", (req, res) => {
    let joke = FilterJoke(jchuck, req.params.filter);
    res.send(`${joke}`);  
})

app.get("/Filter-Joke", (req,res) => {
    let joke = FilterJoke(jchuck, req.query.filter);
    res.send(`${joke}`); 
})

// executando o servidor
app.listen(8081, function () {
    console.log("Servidor na porta 8081");
});

// definindo a rota raiz
//app.get("/", function (req, res) {
//        res.sendFile("/Chuck_Norris_jokes/index.html");
//});