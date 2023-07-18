const Veiculo = require('../models/pessoa.model');



const criarPessoa = async (pessoaData) => {
    const { nomeCompleto, cpf, endereco, telefone, email, dataNascimento } = pessoaData;

    ehValidoNomeCompleto(nomeCompleto);
    ehValidoCpf(cpf);
    ehValidoEndereco(endereco);
    ehValidoTelefone(telefone);
    ehValidoEmail(email);
    ehValidaDataNascimento(dataNascimento);

    /*try {//criar um para pessoa por cpf
        const veiculoExiste = await getVeiculoPorPlaca(placa);

        if (veiculoExiste) {
            throw new Error('Veículo já cadastrado!');
        }

        const veiculo = await Veiculo.create({ placa, modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria });
        return veiculo;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao criar um novo veículo ' + error);
    }*/
};

const atualizarPessoa = async (cpf, pessoaData) => {
    const { nomeCompleto, cpf, endereco, telefone, email, dataNascimento } = pessoaData;

    ehValidoNomeCompleto(nomeCompleto);
    ehValidoCpf(cpf);
    ehValidoEndereco(endereco);
    ehValidoTelefone(telefone);
    ehValidoEmail(email);
    ehValidaDataNascimento(dataNascimento);

    /*try {//fazer get cliente ou funcionario por cpf
        const veiculo = await getVeiculoPorPlaca(placa);

        if (!veiculo) {
            throw new Error('Veículo não encontrado');
        }

        await veiculo.update({ placa, modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria });

        return veiculo;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao atualizar o veículo');
    }*/
};

const deletarPessoa = async (cpf) => {
    try {
        const pessoa = await Pessoa.findByPk(cpf);
        await pessoa.destroy();
        return 'Pessoa excluída com sucesso';
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao excluir a pessoa');
    }
};

// ----Validação----

const ehValidoNomeCompleto = (nomeCompleto) => {
    if (nomeCompleto.length >3) {
        throw new Error('O nome completo deve ter ao menos 3 caracteres.');
    }
};

const ehValidoCpf = (cpf) => {
    if (cpf.length !== 11 ) {
        throw new Error('O cpf deve ter 11 caracteres.');
    }
};

const ehValidoEndereco = (endereco) => {
    if (endereco.length < 2 || endereco.length > 100) {
        throw new Error('O endereço deve ter entre 2 e 100 caracteres.');
    }
};

const ehValidoTelefone = (telefone) => {
    if (telefone.length !== 11) {
        throw new Error('O telefone deve ter 11 caracteres.');
    }
};

const ehValidoEmail = (email) => {
    
    if (!email.includes(`@`)) {//verificar
        throw new Error('Email invalido, email deve incluir @.');
    }
};

const ehValidaDataNascimento = (dataNascimento) => {
    const anoAtual = date.getFullYear();
    if (dataNascimento > anoAtual) {
        throw new Error('Data invalida.');
    }
};

module.exports = {
    criarPessoa,
    atualizarPessoa,
    deletarPessoa,
};
