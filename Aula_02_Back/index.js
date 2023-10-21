const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Front/index.html");
});

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});

let nomes = [];

// CREATE
app.post("/cadastroNome", (req, res) => {
    const { nome } = req.body;
    nomes.push(nome);
    console.log("Nome cadastrado:", nome);
    res.sendFile(__dirname + "/Front/index.html");
});

// READ
app.get("/mostrarNomes", (req, res) => {
    console.log("Nomes cadastrados:", nomes);
    res.send(nomes);
});

// UPDATE
app.put("/atualizarNome", (req, res) => {
    const { nomeAtualizado } = req.body;
    const index = nomes.findIndex((nome) => nome === nomeAtualizado);
    if (index !== -1) {        
        nomes[index] = nomeAtualizado;
        console.log("Nome atualizado para:", nomeAtualizado);
    } else {
        console.log("Nome não encontrado:", nomeAtualizado);
    }
    res.sendFile(__dirname + "/Front/index.html");
});

// DELETE
app.delete("/deletarNome", (req, res) => {
    const { nomeParaDeletar } = req.body;
    const index = nomes.findIndex((nome) => nome === nomeParaDeletar);
    if (index !== -1) {        
        nomes.splice(index, 1);
        console.log("Nome deletado:", nomeParaDeletar);
    } else {
        console.log("Nome não encontrado:", nomeParaDeletar);
    }
    res.sendFile(__dirname + "/Front/index.html");
});
