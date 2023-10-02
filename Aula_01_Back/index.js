// Adicionar a biblioteca
const express = require('express');

// Criar um padrão de boas práticas (CLEAN CODE)
const app = express();
// Utilizar a biblioteca JSON
app.arguments(express.json());

// Abrir o servidor na porta 3000
app.listen(3000, () => {
    console.log("O servidor está ativo na porta 3000");
});

// CRUD
// CREATE
app.post("/testePOST", (req, res) => {
    const { nome, sobrenome } = req.body;
    console.log(`Nome: ${nome} \n Sobrenome: ${sobrenome}`);
    res.sendStatus(200);
});