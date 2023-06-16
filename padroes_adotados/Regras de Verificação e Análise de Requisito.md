## PADRÕES_ADOTADOS
---
### Específicação de caracteristicas:
* Defina somente um requisito por vez.
* Mantenha uma estrutura hierárquica dos requisitos.
* Transforme os requisitos do usuário em requisitos de software.
   

## Regras dos Requisistos:

### Estruturas das nomenclaturas dos requisitos funcionais e não funcionais
---
##### REQUISITOS FUNCIONAIS:
     
    Regras:
     RF (Requisitos Funcionais);
     C (create);
     R (read);
     U (update);
     D (delete);
     TC (Tabela Cliente);
     TV (Tabela Veículos);
     TA (Tabela Aluguel);
     TF (Tabela Funcionário);
     TL (Tabela Login);
     
    Exemplo para compreender as nomenclaturas dos requisitos funcionais:
     RF-R1U Consulta de Usuários.
     
    CADASTRAR (CREATE):
     RF-C-TC Cliente
     RF-C-TV Veículo
     RF-C-TA Aluguel
     RF-C-TF Funcionário
     RF-C-TL Login

    CONSULTAR (READ):
     RF-R-TC Cliente
     RF-R-TV Veículo
     RF-R-TA Aluguel
     RF-R-TF Funcionário 
     RF-R-TL Login
  
    ATUALIZAR (UPDATE):
     RF-U-TC Cliente
     RF-U-TV Veículo
     RF-U-TA Aluguel
     RF-U-TF Funcionário 
     RF-U-TL Login
 
    EXCLUIR (DELETE):
     RF-D-TC Cliente
     RF-D-TV Veículo
     RF-D-TA Aluguel
     RF-D-TF Funcionário 
     RF-D-TL Login
     
##### REQUISITOS NÃO FUNCIONAIS
    
    RNF (Requisitos não funcionais);
    M (Manuteção);
    0 (Baseline);
    0 (versão);

    Exemplo para commpreender a noclaturas dos requisitos não funcionais
    RNF-M-0-0 Manuteção:
----
********************************************************************************
#### REQUISITOS FUNCIONÁRIOS
      RF-C-TF-TL- Cadastrar-se
      RF-R-TF- Consultar dados pessoais
      RF-U-TF- Alterar dados pessoais
      RF-D-TF- Deletar cadastro (contanto que não existam alugueis)
      RF-C-TV- Cadastrar veiculo
      RF-R-TV- Consultar veiculo
      RF-U-TV- Alterar dados dos veiculos
      RF-D-TV- Deletar cadastro de veiculos (contanto que não existam alugueis)
      RF-R-TA- Consultar aluguéis
      RF-R-TL- Logar no sistema
     
 #### REQUISITOS CLIENTE

      RF-C-TC-TL- Cadastrar-se
      RF-R-TC- Consultar dados pessoais
      RF-U-TC- Alterar dados pessoais
      RF-D-TC- Deletar cadastro (contanto que não existam alugueis)
      RF-R-TL- Logar no sistema
      RF-R-TV- Vizualizar Catálogo de Veículos (somente os veiculos disponíveis)
      RF-C-TA1- Alugar veículo
      RF-R-TA- Consultar seus alugueis (somente alugueis com o próprio cliente)
      RF-C-TA2- Renovar aluguel (cria um novo aluguel com inicio a partir do fim da locação anterior)

# REQUISITOS NÃO FUNCIONAIS

    Usabilidade
      RNF-U00 Hospedagem cloud
      RNF-U01 Conexão ssh para desenvolvedores
      RNF-U02 Design responsivo
      
    Confiabilidade
      RNF-C00 Manutenção

    Desempenho
      RNF-D00 Consulta Ágil (0.5 segundos)

    Segurança
      RNF-S00 Autenticação SSH
      RNF-S01 Banco de dados Criptografado (SHA-256 bits)
      
    Distribuição
      RNF-D00 Estrutura de Versões

    Padrões
      RNF-P00 Nomeclatura dos Requisitos

    Hardware
      RNF-H00 Hardware

    Software
      RNF-S00 Software 
