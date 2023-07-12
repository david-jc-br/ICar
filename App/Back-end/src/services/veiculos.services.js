const Veiculo = require('../models/veiculos.model');

const getAllVeiculos = async () => {
    try {
        const veiculos = await Veiculo.findAll();
        return veiculos;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao pesquisar os veículos');
    }
};

const getOneVeiculo = async (placa) => {
    try {
        const veiculos = await Veiculo.findByPk(placa);
        return veiculos;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao pesquisar o veículo com placa ' + placa );
    }
};


const criarVeiculo = async (veiculoData) => {
    const { placa, modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria } = veiculoData;

    ehValidoPlaca(placa);
    ehValidoModelo(modelo);
    ehValidoMarca(marca);
    ehValidoAno(ano);
    ehValidoCombustivel(combustivel);
    ehValidaDisponibilidade(disponibilidade);
    ehValidaCor(cor);
    ehValidoValorDiaria(valorDiaria);

    try {
        const veiculo = await Veiculo.create({ placa, modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria });
        return veiculo;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao criar um novo veículo');
    }
};

const atualizarVeiculo = async (placa, veiculoData) => {
    const { modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria } = veiculoData;

    ehValidoModelo(modelo);
    ehValidoMarca(marca);
    ehValidoAno(ano);
    ehValidoCombustivel(combustivel);
    ehValidaDisponibilidade(disponibilidade);
    ehValidaCor(cor);
    ehValidoValorDiaria(valorDiaria);

    try {
        const veiculo = await Veiculo.findByPk(placa);
        if (!veiculo) {
            throw new Error('Veículo não encontrado');
        }

        await veiculo.update({ placa, modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria });

        return veiculo;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao atualizar o veículo');
    }
};

const deletarVeiculo = async (placa) => {
    try {
        const veiculo = await Veiculo.findByPk(placa);
        await veiculo.destroy();
        return 'Veículo excluído com sucesso';
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao excluir o veículo');
    }
};

const getVeiculoPorPlaca = async (placa) => {
    try {
        const veiculo = await Veiculo.findByPk(placa);
        if (!veiculo) {
            throw new Error('Veículo não encontrado');
        }
        return veiculo;

    } catch (error) {
        console.error(error);
        throw new Error(`Nenhum veículo com a placa ${placa} encontrado!`);
    }
};

// ----Validação----

const ehValidoPlaca = (placa) => {
    if (placa.length !== 7) {
        throw new Error('A placa deve ter exatamente 7 caracteres.');
    }
};

const ehValidoModelo = (modelo) => {
    if (modelo.length < 2 || modelo.length > 100) {
        throw new Error('O modelo deve ter entre 2 e 100 caracteres.');
    }
};

const ehValidoMarca = (marca) => {
    if (marca.length < 2 || marca.length > 100) {
        throw new Error('A marca deve ter entre 2 e 100 caracteres.');
    }
};

const ehValidoAno = (ano) => {
    if (ano < 2021 || ano > 2025) {
        throw new Error('O ano deve estar entre 2021 e 2025.');
    }
};

const ehValidoCombustivel = (combustivel) => {
    const combustiveisValidos = ['Álcool', 'Gasolina', 'Flex', 'Elétrico'];
    if (!combustiveisValidos.includes(combustivel)) {
        throw new Error('O combustível selecionado não é válido.');
    }
};

const ehValidaDisponibilidade = (disponibilidade) => {
    const disponibilidadesValidas = ['Disponível', 'Em Manutenção', 'Alugado'];
    if (!disponibilidadesValidas.includes(disponibilidade)) {
        throw new Error('A disponibilidade selecionada não é válida.');
    }
};

const ehValidaCor = (cor) => {
    const coresValidas = ['Branco', 'Preto', 'Vermelho', 'Azul', 'Prata'];
    if (!coresValidas.includes(cor)) {
        throw new Error('A cor selecionada não é válida.');
    }
};

const ehValidoValorDiaria = (valorDiaria) => {
    if (valorDiaria < 90.0) {
        throw new Error('O valor da diária deve ser igual ou superior a 90.00 reais.');
    }
};

module.exports = {
    getAllVeiculos,
    getOneVeiculo,
    criarVeiculo,
    atualizarVeiculo,
    deletarVeiculo,
    getVeiculoPorPlaca,
};
