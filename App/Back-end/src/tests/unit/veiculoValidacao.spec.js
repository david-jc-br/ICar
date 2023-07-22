// Para Rodar basta apenas dar um npm run test 

// O front-end e back-end não podem estar ativos

const { expect } = require('chai');
const {
    ehValidaCor,
    ehValidaDisponibilidade,
    ehValidoAno,
    ehValidoCombustivel,
    ehValidoMarca,
    ehValidoModelo,
    ehValidoPlaca,
    ehValidoValorDiaria,
} = require('../../services/veiculos.services');

describe('Testes Unitários para as funções de validação', () => {
    it('Deve lançar um erro para cor inválida', () => {
        const invalidColor = 'Roxo';
        expect(() => ehValidaCor(invalidColor)).to.throw('A cor selecionada não é válida.');
    });

    it('Deve lançar um erro para disponibilidade inválida', () => {
        const invalidDisponibilidade = 'Indisponível';
        expect(() => ehValidaDisponibilidade(invalidDisponibilidade)).to.throw('A disponibilidade selecionada não é válida.');
    });

    it('Deve lançar um erro para ano inválido', () => {
        const invalidAno = 2021;
        expect(() => ehValidoAno(invalidAno)).to.throw('O ano deve estar entre 2022 e 2024.');
    });

    it('Deve lançar um erro para combustível inválido', () => {
        const invalidCombustivel = 'Diesel';
        expect(() => ehValidoCombustivel(invalidCombustivel)).to.throw('O combustível selecionado não é válido.');
    });

    it('Deve lançar um erro para marca inválida', () => {
        const invalidMarca = 'A';
        expect(() => ehValidoMarca(invalidMarca)).to.throw('A marca deve ter entre 2 e 100 caracteres.');
    });

    it('Deve lançar um erro para modelo inválido', () => {
        const invalidModelo = 'X';
        expect(() => ehValidoModelo(invalidModelo)).to.throw('O modelo deve ter entre 2 e 100 caracteres.');
    });

    it('Deve lançar um erro para placa inválida', () => {
        const invalidPlaca = 'ABCY1234';
        expect(() => ehValidoPlaca(invalidPlaca)).to.throw('A placa deve ter exatamente 7 caracteres.');
    });

    it('Deve lançar um erro para valor diária inválido', () => {
        const invalidValorDiaria = 80.0;
        expect(() => ehValidoValorDiaria(invalidValorDiaria)).to.throw('O valor da diária deve ser igual ou superior a 90.00 reais.');
    });
});
