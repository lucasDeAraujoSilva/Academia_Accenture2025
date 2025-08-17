import { When, Then } from "cypress-cucumber-preprocessor/steps"

When("preencho o campo Type to search com dados existentes na tabela", () => {
  cy.preencheCampoSearch("Cierra")
})

Then("a tabela é filtrada com os dados correspondentes", () => {
  cy.validaPesquisa("Cierra", 1)
})