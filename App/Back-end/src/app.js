const express = require('express');
const chalk = require('chalk');
const https = require('https');
const cors = require('cors');
const fs = require('fs');
const app = express();

// database
const db = require('./config/database');

// routes


// Middleware para processar o corpo das requisições como JSON
app.use(express.json());
app.use(cors());

// Rota inicial do aplicativo
app.get('/', (req, res) => {
    res.send('Bem-vindo à Icar API Back');
});

// Rotas 
// app.use('/cars', carRoutes);
// app.use('/people');

// Lidar com rotas não encontradas
app.use((req, res, next) => {
    res.status(404).json({ message: 'Rota não encontrada.' });
});

// Lidar com erros globais
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor.' });
});

// Sincronizar os modelos com o banco de dados
db.sync()
    .then(() => {
        console.log(chalk.blue('\nDatabase tables synchronized successfully.'));
        // Iniciar o servidor após a sincronização
        const options = {
            key: fs.readFileSync('./ssl/localhost-key.pem'),
            cert: fs.readFileSync('./ssl/localhost.pem')
        };
        https.createServer(options, app).listen(3001, () => {
            console.log(chalk.green('\nServer started on port 3001 using HTTPS!'));

            console.log(chalk.yellow('\nhttps://localhost:3001/'));
        });
    })
    .catch((error) => {
        console.error(chalk.red('Erro ao sincronizar as tabelas do banco de dados:'), error);
    });
