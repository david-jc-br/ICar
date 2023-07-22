// criptografia de senha
const bcrypt = require('bcrypt');

// Models
const {Pessoa, Cliente, Funcionario}  = require('../models/icar.model');

const getFuncionarios = async () => {
    try {
        // Obter todos os funcionários com suas funções (Atendente, Jurídico, ou RH)
        const funcionarios = await Funcionario.findAll({
            attributes: ['cpf', 'funcao'],
        });

        // Obter os cpfs dos funcionários
        const cpfsFuncionarios = funcionarios.map(funcionario => funcionario.cpf);

        // Filtrar as pessoas individualmente pelos cpfs dos funcionários
        const pessoasFuncionarios = await Pessoa.findAll({
            where: {
                cpf: cpfsFuncionarios,
            },
            attributes: ['nome', 'cpf', 'nascimento', 'endereco', 'telefone', 'senha'],
        });

        // Formatar os dados para cada pessoaFuncionario individualmente
        const funcionariosFormatados = pessoasFuncionarios.map(pessoaFuncionario => {
            const funcionario = funcionarios.find(f => f.cpf === pessoaFuncionario.cpf);
            return {
                nome: pessoaFuncionario.nome,
                cpf: pessoaFuncionario.cpf,
                nascimento: pessoaFuncionario.nascimento,
                endereco: pessoaFuncionario.endereco,
                telefone: pessoaFuncionario.telefone,
                funcao: funcionario ? funcionario.funcao : null,
                senha: pessoaFuncionario.senha,
            };
        });

        return funcionariosFormatados;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao obter funcionários');
    }
};


const getClientes = async () => {
    try {
        const clientes = await Cliente.findAll({
            attributes: ['cpf', 'cnh'],
        });

        const cpfsClientes = clientes.map(cliente => cliente.cpf);

        const pessoasFuncionarios = await Pessoa.findAll({
            where: {
                cpf: cpfsClientes,
            },
            attributes: ['nome', 'cpf', 'nascimento', 'endereco', 'telefone', 'senha'],
        });

        const funcionariosFormatados = pessoasFuncionarios.map(pessoaFuncionario => {
            const cliente = clientes.find(c => c.cpf === pessoaFuncionario.cpf);
            return {
                nome: pessoaFuncionario.nome,
                cpf: pessoaFuncionario.cpf,
                nascimento: pessoaFuncionario.nascimento,
                endereco: pessoaFuncionario.endereco,
                telefone: pessoaFuncionario.telefone,
                cnh: cliente ? cliente.cnh : null,
                senha: pessoaFuncionario.senha,
            };
        });

        return funcionariosFormatados;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao obter clientes');
    }
};


const criarFuncionario = async (nome, cpf, nascimento, endereco, telefone, funcao, senha) => {
    try {
        ehValidoNome(nome);
        ehValidoCpf(cpf);
        ehValidoData(nascimento);
        ehValidoEndereco(endereco);
        ehValidoTelefone(telefone)
        ehValidoFuncao(funcao);
        ehValidoSenha(senha);
        // Criptografando a senha antes de armazenar no banco de dados
        const senhaCriptografada = await bcrypt.hash(senha, 10); // O segundo argumento é o número de salt rounds (recomendado >= 10)

        const pessoa = await Pessoa.create({ nome, cpf, nascimento, endereco, telefone, tipo: 'Funcionário', senha: senhaCriptografada });

        const funcionario = await Funcionario.create({ funcao, cpf });

        const resultado = {
            nome: pessoa.nome,
            cpf: pessoa.cpf,
            nascimento: pessoa.nascimento,
            endereco: pessoa.endereco,
            telefone: pessoa.telefone,
            funcao: funcionario.funcao,
            senha: senhaCriptografada, 
        };

        return resultado;
    } catch (error) {
        console.error(error);
        throw new Error(`Erro ao criar funcionário: ${error}`);
    }
};

const criarCliente = async (nome, cpf, nascimento, endereco, telefone, cnh, senha) => {
    try {
        ehValidoNome(nome);
        ehValidoCpf(cpf);
        ehValidoData(nascimento);
        ehValidoEndereco(endereco);
        ehValidoTelefone(telefone)
        ehValidoCnh(cnh);
        ehValidoSenha(senha);
        // Criptografando a senha antes de armazenar no banco de dados
        const senhaCriptografada = await bcrypt.hash(senha, 10); // O segundo argumento é o número de salt rounds (recomendado >= 10)

        const pessoa = await Pessoa.create({ nome, cpf, nascimento, endereco, telefone, tipo: 'Cliente', senha: senhaCriptografada });

        const cliente = await Cliente.create({ cnh, cpf });

        const resultado = {
            nome: pessoa.nome,
            cpf: pessoa.cpf,
            nascimento: pessoa.nascimento,
            endereco: pessoa.endereco,
            telefone: pessoa.telefone,
            cnh: cliente.cnh,
            senha: senhaCriptografada, 
        };

        return resultado;
    } catch (error) {
        console.error(error);
        throw new Error(`Erro ao criar cliente: ${error}`);
    }
};

// Atualizar pessoa por CPF
const updatePessoaByCpf = async (cpf, nome, nascimento, endereco, telefone, tipo) => {
    try {
        const pessoa = await Pessoa.findOne({ where: { cpf } });
        if (pessoa) {
            await pessoa.update({ nome, nascimento, endereco, telefone, tipo });
            return pessoa;
        } else {
            throw new Error('Pessoa não encontrada');
        }
    } catch (error) {
        throw new Error('Erro ao atualizar pessoa');
    }
};

// Deletar pessoa por CPF
const deletePessoaByCpf = async (cpf) => {
    try {
        const pessoa = await Pessoa.findOne({ where: { cpf } });
        if (pessoa) {
            await pessoa.destroy();
            return true;
        } else {
            throw new Error('Pessoa não encontrada');
        }
    } catch (error) {
        throw new Error('Erro ao deletar pessoa');
    }
};

// ----Verificaçõe----

const cpfJaCadastrado = (cpf) => {
    if(getOneFuncionario(cpf) === null || getOneCliente(cpf) === null)
    {
        throw new Error('CPF já cadastrado!');
    }
}

// ----Validação----

const ehValidoNome = (nome) => {
    if (nome.length < 2 || nome.length > 200) {
        throw new Error('O nome deve ter entre 2 a 200 caracteres');
    }
};

const ehValidoCpf = (cpf) => {


    const regex = /^\d+$/;
    if (!regex.test(cpf)) {
        throw new Error('O CPF deve conter apenas números.');
    }

    if (cpf.length !== 11) {
        throw new Error('O CPF deve ter exatamente 11 caracteres.');
    }
};

const ehValidoTelefone = (telefone) => {
    if (telefone.length !== 12) {
        throw new Error('o telefone deve ter exatamente 12 caracteres.');
    }
};

const ehValidoFuncao = (funcao) => {
    const funcoesValidas = [
        'Atendente',
        'Jurídico',
        'RH',
    ]

    if (!funcoesValidas.includes(funcao)) {
        throw new Error(`A função: ${funcao} não é válida, ela precisa ser Atendente, Jurídico ou RH`);
    }
};

const ehValidoData = (nascimento) => {
    // Verificar se é uma string no formato 'yyyy-mm-dd'
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(nascimento)) {
        throw new Error('O formato do nascimento deve ser "yyyy-mm-dd".');
    }

    // Verificar se é uma data válida
    const data = new Date(nascimento);
    if (isNaN(data.getTime())) {
        throw new Error('Data de nascimento inválida.');
    }
};

const ehValidoEndereco = (endereco) => {
    if (endereco.length < 3 || endereco.length > 200) {
        throw new Error('O endereco deve ter entre 3 a 200 caracteres');
    }
};

const ehValidoCnh = (cnh) => {
    const regex = /^\d+$/;
    if (!regex.test(cnh)) {
        throw new Error('A CNH deve conter apenas números.');
    }

    if (cnh.length !== 11) {
        throw new Error('A cnh deve ter exatamente 11 caracteres.');
    }
};

const ehValidoSenha = (senha) => {
    if (senha.length > 200) {
        throw new Error('A semha deve ter até 200 caracteres.');
    }
};


module.exports = {
    ehValidoCpf,
    ehValidoSenha,
    getFuncionarios,
    getClientes,
    ehValidoData,
    criarFuncionario,
    criarCliente,
    updatePessoaByCpf,
    deletePessoaByCpf,
};
