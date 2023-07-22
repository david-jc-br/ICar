const express = require('express');
const router = express.Router();

const AluguelController = require('../controllers/aluguel.controller');

// Rotas para Aluguel
router.get('/', AluguelController.getAllAlugueis);
router.get('/:id', AluguelController.getAluguelById);
router.post('/', AluguelController.criarAluguel);
router.put('/:id', AluguelController.updateAluguelById);
router.delete('/:id', AluguelController.deleteAluguelById);

module.exports = router;
