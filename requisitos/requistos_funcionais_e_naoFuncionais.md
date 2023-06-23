# REQUISITOS FUNCIONAIS
#### REQUISITOS FUNCIONÁRIOS
      RF-C-TF-TL Cadastrar-se
      RF-R-TF Consultar dados pessoais
      RF-U-TF Alterar dados pessoais
      RF-D-TF Deletar cadastro (contanto que não existam alugueis)
      RF-C-TV Cadastrar veiculo
      RF-R-TV Consultar veiculo
      RF-U-TV Alterar dados dos veiculos
      RF-D-TV Deletar cadastro de veiculos (contanto que não existam alugueis)
      RF-R-TA Consultar aluguéis
      RF-R-TL Logar no sistema
     
 #### REQUISITOS CLIENTE

      RF-C-TC-TL Cadastrar-se
      RF-R-TC Consultar dados pessoais
      RF-U-TC Alterar dados pessoais
      RF-D-TC Deletar cadastro (contanto que não existam alugueis)
      RF-R-TL Logar no sistema
      RF-R-TV Vizualizar Catálogo de Veículos (somente os veiculos disponíveis)
      RF-C-TA1 Alugar veículo
      RF-R-TA Consultar seus alugueis (somente alugueis com o próprio cliente)
      RF-C-TA2 Renovar aluguel (cria um novo aluguel com inicio a partir do fim da locação anterior)

# REQUISITOS NÃO FUNCIONAIS

#### Usabilidade
      RNF-U00 Hospedagem cloud
      RNF-U01 Conexão ssh para desenvolvedores
      RNF-U02 Design responsivo
      
#### Confiabilidade
      RNF-C00 Manutenção

#### Desempenho
      RNF-D00 Consulta Ágil (0.5 segundos)

#### Segurança
      RNF-S00 Autenticação SSH
      RNF-S01 Banco de dados Criptografado (SHA-256 bits)
      
#### Distribuição
      RNF-D00 Estrutura de Versões
