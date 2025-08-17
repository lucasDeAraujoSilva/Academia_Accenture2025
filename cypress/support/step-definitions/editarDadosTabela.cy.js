import { And, Then } from "cypress-cucumber-preprocessor/steps"

And("clico no botão Edit de Action", () => {
  cy.botaoEditar()
})

And("edito as informações desejadas", () => {
  cy.editarDadosTabela()
})

Then("os dados devem ser atualizados corretamente na tabela", () => {
  cy.validaEdicaoTabela()
})