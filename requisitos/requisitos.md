# REQUISITOS FUNCIONAIS
#### REQUISITOS DE FUNCIONÁRIO
      RF-C-FU01 - Cadastrar-se
      RF-R-FU01 - Visualizar informações pessoais
      RF-U-FU01 - Alterar dados pessoais
      RF-D-FU01 - Deletar cadastro (contanto que não existam alugueis)
      RF-C-FU02 - Cadastrar veículo
      RF-R-FU02 - Consultar veículo
      RF-U-FU02 - Atualizar veículo
      RF-D-FU02 - Excluir veículo (contanto que não existam aluguel)
      RF-R-FU03 - Visualizar aluguéis
      RF-R-FU04 - Visualizar informações do veículo
      RF-R-FU05 - Logar no sistema
      
 #### REQUISITOS DE CLIENTE
      RF-C-CL01 - Cadastrar-se
      RF-R-CL01 - Visualizar informações pessoais
      RF-U-CL01 - Alterar dados pessoais
      RF-D-CL01 - Deletar cadastro (contanto que não existam aluguéis)
      RF-R-CL02 - Logar no sistema
      RF-R-CL03 - Visualizar Catálogo de Veículos (somente os veículos disponíveis)
      RF-R-CL04 - Visualizar informações do veículo
      RF-C-CL02 - Efetuar locação
      RF-R-CL05 - Visualizar aluguéis (somente aluguéis com o próprio cliente)
      RF-C-CL03 - Renovar aluguel (cria um novo aluguel com início a partir do fim da locação anterior)

# REQUISITOS NÃO FUNCIONAIS

#### Usabilidade
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
