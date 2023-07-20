const PessoaService = require('../services/pessoa.services');

const getFuncionarios = async (req, res) => {
    try {
        const pessoas = await PessoaService.getFuncionarios();
        res.json(pessoas);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.error(error);
    }
};

const getOneFuncionario = async (req, res) => {
    try {
        const pessoas = await PessoaService.getOneFuncionario();
        res.json(pessoas);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.error(error);
    }
};

const getClientes = async (req, res) => {
    try {
        const pessoas = await PessoaService.getClientes();
        res.json(pessoas);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.error(error);
    }
};

const getOneCliente= async (req, res) => {
    try {
        const pessoas = await PessoaService.getClientes();
        res.json(pessoas);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.error(error);
    }
};

// Criar funcionario
const criarFuncionario = async (req, res) => {
    try {
        const { nome, cpf, nascimento, endereco, telefone, funcao, senha } = req.body;

        const resultado = await PessoaService.criarFuncionario(nome, cpf, nascimento, endereco, telefone, funcao, senha);

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Criar cliente
const criarCliente = async (req, res) => {
    try {
        const { nome, cpf, nascimento, endereco, telefone, cnh, senha } = req.body;

        const resultado = await PessoaService.criarCliente(nome, cpf, nascimento, endereco, telefone, cnh, senha);

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar pessoa por CPF
const updatePessoaByCpf = async (req, res) => {
    const cpf = req.params.cpf;
    const { nome, nascimento, endereco, telefone, tipo } = req.body;
    try {
        const pessoa = await PessoaService.updatePessoaByCpf(cpf, nome, nascimento, endereco, telefone, tipo);
        res.json(pessoa);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Deletar pessoa por CPF
const deletePessoaByCpf = async (req, res) => {
    const cpf = req.params.cpf;
    try {
        await PessoaService.deletePessoaByCpf(cpf);
        res.sendStatus(204);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    getFuncionarios,
    getOneFuncionario,
    getClientes,
    getOneCliente,
    criarFuncionario,
    criarCliente,
    updatePessoaByCpf,
    deletePessoaByCpf,
};
