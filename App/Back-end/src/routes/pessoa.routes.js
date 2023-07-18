const express = require('express');
const PessoaController = require('../controllers/pessoa.controller');

const router = express.Router();

router.post('/', PessoaController.criarPessoa);
router.put('/:cpf', PessoaController.atualizarPessoa);
router.delete('/:cpf', PessoaController.deletarPessoa);

module.exports = router;
