#utf-8
#language: pt

Funcionalidade: ValidarDadosTabela-01 - Validar dados na tabela

    Cenário: 
        Dado que acesso o portal demoqa webtables
        E clico no botão Add
        E não preencho todos os campos obrigatórios com dados válidos
        Quando clico no botão Submit
        Então os campos vazios devem ficar vermelho