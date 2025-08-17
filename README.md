# Academia_Accenture2025

## Descrição
Projeto de automação de testes utilizando Cypress, desenvolvido para a Academia Accenture 2025. O objetivo é validar funcionalidades de um formulário web, incluindo inserção, edição, remoção e validação de dados em uma tabela.

## Estrutura do Projeto
- `cypress/e2e/`: Contém os cenários de teste escritos em Gherkin (`.feature`).
- `cypress/support/pages/`: Implementação do padrão Page Object Model (POM) para facilitar a manutenção dos testes.
- `cypress/fixtures/`: Dados utilizados nos testes automatizados.
- `cypress/support/commands.js`: Comandos customizados do Cypress.

## Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/) para geração de dados fictícios

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

## Licença
Este projeto é apenas para fins educacionais.