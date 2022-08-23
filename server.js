import express from "express";
const app = express();

app.get("/informar-nome/:nome",(req,res) => { //http://localhost:8081/informar-nome/carlos
    res.send(`${req.params.nome} ${req.params.nome }`);
})

app.get("/informar-nome",(req,res) => { //http://localhost:8081/informar-nome?nome=carlos&sobrenome=eduardo
    res.send(`${req.query.nome} ${req.query.sobrenome }`);
})

// executando o servidor
app.listen(8081, function () {
    console.log("Servidor na porta 8081");
});