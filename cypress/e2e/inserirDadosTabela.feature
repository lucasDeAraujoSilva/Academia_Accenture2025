#utf-8
#language: pt

Funcionalidade: InserirDadosTabela-01 - Inserir dados na tabela

    Cenário:
        Dado que acesso o portal demoqa webtables
        E clico no botão Add
        E preencho os campos obrigatórios com dados válidos
        Quando clico no botão Submit
        Então os dados devem aparecer corretamente na tabela