# REQUISITOS FUNCIONAIS
#### REQUISITOS DE FUNCIONÁRIO
      RF-C-TF-TP-TL - Cadastrar-se
      RF-R-TF-TP - Consultar dados pessoais
      RF-U-TF-TP - Alterar dados pessoais
      RF-D-TF-TP - Deletar cadastro (contanto que não existam alugueis)
      RF-C-TV - Cadastrar veículo
      RF-R-TV - Consultar veículo
      RF-U-TV - Alterar dados dos veículos
      RF-D-TV - Deletar cadastro de veículos (contanto que não existam aluguel)
      RF-R-TA - Consultar aluguéis
      RF-R-TL - Logar no sistema
     
 #### REQUISITOS DE CLIENTE

      RF-C-TC-TP-TL - Cadastrar-se
      RF-R-TC-TP - Consultar dados pessoais
      RF-U-TC-TP - Alterar dados pessoais
      RF-D-TC-TP - Deletar cadastro (contanto que não existam aluguéis)
      RF-R-TL - Logar no sistema
      RF-R-TV - Visualizar Catálogo de Veículos (somente os veículos disponíveis)
      RF-C-TA1 - Alugar veículo
      RF-R-TA - Consultar seus aluguéis (somente aluguéis com o próprio cliente)
      RF-C-TA2 - Renovar aluguel (cria um novo aluguel com início a partir do fim da locação anterior)

# REQUISITOS NÃO FUNCIONAIS

#### Usabilidade
      RNF-U00 Hospedagem cloud
      RNF-U01 Conexão ssh para desenvolvedores
      RNF-U02 Design responsivo para desktop e mobile
      
#### Confiabilidade
      RNF-C00 Manutenção

#### Desempenho
      RNF-D00 Consulta Ágil (0.5 segundos)

#### Segurança
      RNF-S00 Autenticação SSH
      RNF-S01 Banco de dados Criptografado (SHA-256 bits)
      
#### Distribuição
      RNF-D00 Estrutura de Versões
