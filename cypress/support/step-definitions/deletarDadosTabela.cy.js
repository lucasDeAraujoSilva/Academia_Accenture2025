import { When, Then } from "cypress-cucumber-preprocessor/steps"

When("clico no botão Delete de Action", () => {
  cy.botaoDeletar()
})

Then("os dados devem ser removidos corretamente da tabela", () => {
  cy.botaoDeletar1()
})
