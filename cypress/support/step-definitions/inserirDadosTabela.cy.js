import { Given, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("que acesso o portal demoqa webtables", () => {
  cy.visit("/")
})

And("clico no botão Add", () => {
  cy.clicaBotaoAdd()
})

And("preencho os campos obrigatórios com dados válidos", () => {
  cy.preencheCamposFormulario()
})

When("clico no botão Submit", () => {
  cy.clicaBotaoSubmit()
})

Then("os dados devem aparecer corretamente na tabela", () => {
  cy.validaTabela()
})