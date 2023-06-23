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
