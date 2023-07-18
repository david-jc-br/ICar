const PessoaService = require('../services/pessoa.services');

const criarPessoa = async (req, res) => {
    const pessoaData = req.body;
    try {
        const pessoa = await PessoaService.criarPessoa(pessoaData);
        res.json(pessoa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const atualizarPessoa = async (req, res) => {
    const { cpf } = req.params;
    const pessoaData = req.body;
    try {
        const pessoa = await PessoaService.atualizarPessoa(cpf, pessoaData);
        res.json(pessoa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletarPessoa = async (req, res) => {
    const { cpf } = req.params;
    try {
        await PessoaService.deletarPessoa(cpf);
        res.json({ message: 'Pessoa excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    criarPessoa,
    atualizarPessoa,
    deletarPessoa,
};
