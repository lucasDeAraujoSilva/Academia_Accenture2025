# Academia_Accenture2025

## Descrição
Projeto de automação de testes utilizando Cypress, desenvolvido para a Academia Accenture 2025. O objetivo é validar funcionalidades de um formulário web, incluindo inserção, edição, remoção, pesquisa e validação de dados em uma tabela.

## Estrutura do Projeto
- `cypress/e2e/`: Contém os cenários de teste escritos em Gherkin (`.feature`).
	- `apagarDadosTabela.feature`: Teste de remoção de dados.
	- `editarDadosTabela.feature`: Teste de edição de dados.
	- `inserirDadosTabela.feature`: Teste de inserção de dados.
	- `pesquisaDadosTabela.feature`: Teste de pesquisa de dados.
	- `validarSubmitTabela.feature`: Teste de validação dos campos obrigatórios do formulário.
- `cypress/fixtures/`: Dados utilizados nos testes automatizados.
- `cypress/support/pages/`: Implementação do padrão Page Object Model (POM) para facilitar a manutenção dos testes.
- `cypress/support/step-definitions/`: Arquivos de definição dos passos dos cenários Gherkin, conectando os cenários aos comandos Cypress.
- `cypress/support/commands.js`: Comandos customizados do Cypress.
- `cypress/support/e2e.js`: Arquivo de configuração e suporte para execução dos testes end-to-end.

## Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/) para geração de dados fictícios
- [Cucumber](https://cucumber.io/) para escrita de cenários de teste em Gherkin

## Instalação
1. Clone o repositório:
	```bash
	git clone https://github.com/lucasDeAraujoSilva/Academia_Accenture2025.git
	```
2. Instale as dependências:
	```bash
	npm install
	```

## Executando os Testes
Para rodar os testes automatizados:
```bash
npx cypress open
```
Ou para execução em modo headless:
```bash
npx cypress run
```

## Padrão POM
O projeto utiliza o padrão Page Object Model para organizar os comandos de interação com a página, facilitando a reutilização e manutenção dos testes.