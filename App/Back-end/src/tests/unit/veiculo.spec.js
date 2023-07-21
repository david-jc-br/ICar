const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('Testes para o endpoint /', () => {
    // Antes de cada teste, inicializamos um novo agente de teste supertest
    let agent;
    // Variável para armazenar a placa do veículo criado para ser excluído posteriormente
    let placaVeiculoCriado;

    beforeEach(() => {
        agent = request.agent(app);
    });

    // Teste para verificar a rota /
    it('Deve retornar status 200', async () => {
        const res = await agent.get('/');
        expect(res.status).to.equal(200);
    });

    // Teste para verificar rota não existente /
    it('Deve retornar status 200', async () => {
        const res = await agent.get('/test');
        expect(res.status).to.equal(404);
    });

    // Teste para verificar o cadastro de veículo
    it('Deve cadastrar um veículo com sucesso', async () => {
        const novoVeiculo = {
            placa: "OOACAXX",
            modelo: "XC60",
            marca: "Volvo",
            ano: 2022,
            combustivel: "Elétrico",
            disponibilidade: "Alugado",
            cor: "Azul",
            valorDiaria: 230.0
        };

        const res = await agent.post('/veiculos').send(novoVeiculo);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.placa).to.equal(novoVeiculo.placa);

        // Armazena a placa do veículo criado para ser usada na exclusão
        placaVeiculoCriado = novoVeiculo.placa;
    });

    // Teste para verificar a exclusão do veículo
    it('Deve excluir o veículo criado', async () => {
        // Verifica se a placa do veículo criado existe
        expect(placaVeiculoCriado).to.exist;

        const res = await agent.delete(`/veiculos/${placaVeiculoCriado}`);
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ message: 'Veículo excluído com sucesso' });
    });

    // Teste para verificar a atualização do veículo
    it('Não deve atualizar o veículo criado', async () => {
        // Verifica se a placa do veículo criado existe
        expect(placaVeiculoCriado).to.exist;

        // Dados atualizados do veículo
        const dadosAtualizados = {
            disponibilidade: "Disponível",
            valorDiaria: 250.0
        };

        const res = await agent.put(`/veiculos/${placaVeiculoCriado}`).send(dadosAtualizados);
        expect(res.status).to.equal(500);
    });

});
