// criptografia de senha
const bcrypt = require('bcrypt');

// Model
const {Pessoa}  = require('../models/icar.model');

//Validação 
const {ehValidoCpf, ehValidoSenha} = require('./pessoa.services');

const login = async (cpfDeEntrada, senha) => {
    try {
        ehValidoCpf(cpfDeEntrada);
        ehValidoSenha(senha);

        const usuario = await Pessoa.findOne({ where: { cpf: cpfDeEntrada } });
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        // compara senha criptografada
        const senhaEquivalente = await bcrypt.compare(senha, usuario.senha);
        if (!senhaEquivalente) {
            throw new Error('Senha inválida');
        }

        if(usuario.tipo === "Cliente")
        {
            const { nome, cpf, nascimento, endereco, telefone, cnh, tipo} = usuario;

            return {nome, cpf, nascimento, endereco, telefone, cnh, tipo};

        }else if (usuario.tipo === "Funcionário"){

            const { nome, cpf, nascimento, endereco, telefone, funcao, tipo } = usuario;

            return {nome, cpf, nascimento, endereco, telefone, funcao, tipo };
        }else {
            throw new Error('Tipo pessoa inválido');
        }


    } catch (error) {
        console.error(error);
        throw new Error('Falha na autenticação: ' + error);
    }
};

module.exports = {login}