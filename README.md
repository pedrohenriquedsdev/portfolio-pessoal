💼 Portfólio Pessoal — Backend + Frontend

Este projeto é um portfólio pessoal desenvolvido com Node.js (Express) no backend e um frontend estático (HTML/CSS/JS ou React, se desejar evoluir).
O objetivo é centralizar seus projetos, informações profissionais e um formulário de contato funcional.

🚀 Tecnologias Utilizadas
Backend

Node.js

Express

CORS

Body-parser

File System (fs) para salvar mensagens no db.json

Frontend

HTML, CSS e JavaScript (ou React se desejar integrar)

📂 Estrutura do Projeto
portfolio-pessoal/
├── backend/
│   ├── server.js
│   ├── db.json
│   ├── package.json
└── frontend/
    ├── index.html
    ├── styles.css
    └── scripts.js

⚙️ Configuração e Execução
1️⃣ Clonar o repositório
git clone https://github.com/pedrohenriquedsdev/portfolio-pessoal.git
cd portfolio-pessoal

2️⃣ Instalar dependências do backend
cd backend
npm install


Isso instalará o Express, CORS e Body-parser (de acordo com o package.json).

3️⃣ Iniciar o servidor backend
npm start


O servidor será iniciado em:

👉 http://localhost:3000

4️⃣ Testar as rotas disponíveis
➤ Rota inicial
GET /


Mostra a mensagem:

Servidor do portfólio está rodando 🚀

➤ Enviar mensagem de contato
POST /contato


Corpo (JSON):

{
  "nome": "Pedro",
  "email": "pedro@email.com",
  "mensagem": "Olá! Gostaria de saber mais sobre seu trabalho."
}

➤ Listar mensagens (para teste)
GET /mensagens


Retorna todas as mensagens salvas em db.json.

5️⃣ Acessar o frontend

O backend está configurado para servir automaticamente os arquivos do frontend:

app.use(express.static(path.join(__dirname, '../frontend')));


Portanto, ao acessar http://localhost:3000
, o navegador exibirá a página do seu portfólio (frontend/index.html).
