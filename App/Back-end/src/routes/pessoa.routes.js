const express = require('express');

const router = express.Router();

const PessoaController = require('../controllers/pessoa.controller');

// Rotas para Pessoa
router.get('/funcionarios', PessoaController.getFuncionarios);
router.get('/clientes', PessoaController.getClientes);

router.get('/funcionario/:cpf', PessoaController.getOneFuncionario);
router.get('/cliente/:cpf', PessoaController.getOneCliente);

router.post('/login', PessoaController.login);

router.post('/funcionario', PessoaController.criarFuncionario);
router.post('/cliente/', PessoaController.criarCliente);

router.put('/:cpf', PessoaController.updatePessoaByCpf);
router.delete('/:cpf', PessoaController.deletePessoaByCpf);

module.exports = router;
