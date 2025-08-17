#utf-8
#language: pt

Funcionalidade: DeletarDadoTabela-01 - Deletar dados na tabela

    Cenário:
        Dado que acesso o portal demoqa webtables
        Quando clico no botão Delete de Action da linha "2"
        Então os dados da linha dois devem ser removidos corretamente da tabela