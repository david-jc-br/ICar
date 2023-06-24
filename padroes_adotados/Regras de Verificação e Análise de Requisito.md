## PADRÕES ADOTADOS

## Especificação das Características Descritivas dos Requisitos do Projeto

Os requisitos devem possuir a convenção universal de escrita: "O software DEVE ..."

`RF` é utilizado para identificar Requisitos Funcionais e `RNF` é utilizado para identificar Requisitos Não Funcionais.

### Prioridade de Requisitos

Para estabelecer a **prioridade** de requisitos foram adotadas as seguintes denominações:
* Essencial: é o requisito sem o qual o sistema não entra em funcionamento, imprescindíveis;
* Importante: é o requisito sem o qual o sistema entra em funcionamento, mas de forma não satisfatória.
* Desejável: é o requisito que não compromete as funcionalidades básicas do sistema, isto é, o sistema pode funcionar de forma satisfatória sem ele.

## Especificação de Requisitos

### Evite palavras

E, OU, SOMENTE SE, EXCETO, SE NECESSÁRIO, MAS, CONTUDO, ENTRETANTO, USUALMENTE, GERALMENTE, FREQUENTEMENTE, TIPICAMENTE, AMIGÁVEL, VERSÁTIL, FLEXÍVEL, APROXIMADAMENTE, TÃO LOGO QUANTO POSSÍVEL, TALVEZ, PROVAVELMENTE 
ou palavras que forneçam a mesma ideia que essas.

### Evite frases grandes

A especificação de requisitos deve ser feita de maneira objetiva e clara.

### Agrupe corretamente os requisitos

Fundamental para manter a legibilidade e entendimento dos requisitos.

## Regras dos Requisistos:

### Estruturas das nomenclaturas dos requisitos funcionais e não funcionais

##### REQUISITOS FUNCIONAIS:
     
    Regras:
     RF (Requisitos Funcionais);
     C (create);
     R (read);
     U (update);
     D (delete);
     CL (Cliente)
     FU (Funcionário)
     
    Exemplo para compreender as nomenclaturas dos requisitos funcionais:
     RF-R-FU Consulta de Usuários.
     
    CADASTRAR (CREATE):
     RF-C - Cliente
     RF-C - Veículo
     RF-C - Aluguel
     RF-C - Funcionário
     RF-C - Login

    CONSULTAR (READ):
     RF-R - Cliente
     RF-R - Veículo
     RF-R - Aluguel
     RF-R - Funcionário 
     RF-R - Login
  
    ATUALIZAR (UPDATE):
     RF-U - Cliente
     RF-U - Veículo
     RF-U - Aluguel
     RF-U - Funcionário 
     RF-U - Login
 
    EXCLUIR (DELETE):
     RF-D - Cliente
     RF-D - Veículo
     RF-D - Aluguel
     RF-D - Funcionário 
     RF-D - Login
     
##### REQUISITOS NÃO FUNCIONAIS
    
    RNF (Requisitos não funcionais);
    M (Manuteção);
    0 (Baseline);
    0 (versão);

    Exemplo para commpreender a noclaturas dos requisitos não funcionais
    RNF-M-0-0 Manuteção:
