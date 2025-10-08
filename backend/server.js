const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Endpoint para receber mensagens do formulário
app.post('/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    // Ler o arquivo de mensagens existentes
    const dbPath = path.join(__dirname, 'db.json');
    let mensagens = [];
    if (fs.existsSync(dbPath)) {
        mensagens = JSON.parse(fs.readFileSync(dbPath));
    }

    // Adicionar a nova mensagem
    mensagens.push({ nome, email, mensagem, data: new Date() });

    fs.writeFileSync(dbPath, JSON.stringify(mensagens, null, 2));

    res.json({ success: 'Mensagem enviada com sucesso!' });
});

// Endpoint para listar mensagens (apenas para teste)
app.get('/mensagens', (req, res) => {
    const dbPath = path.join(__dirname, 'db.json');
    if (!fs.existsSync(dbPath)) return res.json([]);
    const mensagens = JSON.parse(fs.readFileSync(dbPath));
    res.json(mensagens);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
