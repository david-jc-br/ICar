// Para Rodar node .\tests\interface\cadastrarVeiculo.js a partir de src

// É necessário que o back-end e o front-end estarem rodando

const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

async function cadastrarVeiculo() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();

    const placas = ["AAA1234", "BBB5678"];
    const modelos = ["Tiguan", "XC60"];
    const marcas = ["Volkswagem", "Volvo"];
    const anos = [2023, 2023];
    const combustiveis = ["Elétrico", "Flex"];
    const disponibilidades = ["Disponível", "Alugado"];
    const cores = ["Prata", "Branco"];
    const valoresDiaria = [250.00, 260.00];

    try {
        await driver.manage().window().maximize();

        await driver.get(`http://localhost:3000/visualizarVeiculos`);

        await driver.sleep(3000);

        for (let i = 0; i < placas.length; i++) {
            // Acessar a página do formulário de cadastro de veículo
            await driver.get(`http://localhost:3000/cadastrarVeiculo`);

            // Preencher o formulário de cadastro
            await driver.sleep(2000);
            const placa = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[1]/label/input`));
            await placa.sendKeys(placas[i]);
            await driver.sleep(2000);

            const modelo = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[2]/label/input`));
            await modelo.sendKeys(modelos[i]);
            await driver.sleep(2000);

            const marca = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[3]/label/input`));
            await marca.sendKeys(marcas[i]);
            await driver.sleep(2000);

            const ano = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[4]/label/select`));
            await ano.click();
            await driver.sleep(1000);
            const anoOption = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[4]/label/select/option[@value="${anos[i]}"]`));
            await anoOption.click();
            await driver.sleep(1000);

            const combustivel = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[5]/label/select`));
            await combustivel.click();
            await driver.sleep(1000);
            const combustivelOption = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[5]/label/select/option[@value="${combustiveis[i]}"]`));
            await combustivelOption.click();
            await driver.sleep(1000);

            const disponibilidade = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[6]/label/select`));
            await disponibilidade.click();
            await driver.sleep(1000);
            const disponibilidadeOption = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[6]/label/select/option[@value="${disponibilidades[i]}"]`));
            await disponibilidadeOption.click();
            await driver.sleep(1000);

            const cor = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[7]/label/select`));
            await cor.click();
            await driver.sleep(1000);
            const corOption = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[7]/label/select/option[@value="${cores[i]}"]`));
            await corOption.click();
            await driver.sleep(1000);

            const valorDiaria = await driver.findElement(By.xpath(`//*[@id="root"]/header/form/div[8]/label/input`));
            await valorDiaria.clear();
            await valorDiaria.sendKeys(valoresDiaria[i]);
            await driver.sleep(2000);

            // Submeter o formulário
            await driver.findElement(By.css('form')).submit();

            // Aguardar o alerta de sucesso ou erro após o cadastro
            await driver.wait(until.elementLocated(By.css('.alert')), 10000);
            const alert = await driver.findElement(By.css('.alert')).getText();
            console.log(alert);
        }

        await driver.get(`http://localhost:3000/visualizarVeiculos`);

        await driver.sleep(6000);

        await driver.get(`http://localhost:3000/excluirVeiculo`);

        await driver.sleep(2000);
        const placa = await driver.findElement(By.xpath(`//*[@id="root"]/header/div/div/form/label/input`));
        await placa.sendKeys("AAA1234");
        await driver.sleep(2000);

        // Submeter o formulário
        placa.sendKeys(Key.ENTER);

        await driver.wait(until.elementLocated(By.css('.alert')), 10000);
        const alert = await driver.findElement(By.css('.alert')).getText();
        console.log(alert);

        await driver.get(`http://localhost:3000/visualizarVeiculos`);

        await driver.sleep(5000);

    } catch (error) {
        console.error('Erro ao cadastrar veículo:', error);
    } finally {
        // Encerrar o driver após o teste
        await driver.quit();
    }
}

cadastrarVeiculo();
