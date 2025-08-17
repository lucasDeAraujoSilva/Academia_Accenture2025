import { When, Then } from "cypress-cucumber-preprocessor/steps"

When("clico no botão Delete de Action da linha {string}", (deletaLinha) => {
   Cypress.env("deletaLinha", deletaLinha)
  cy.botaoDeletar()
})

Then("os dados da linha dois devem ser removidos corretamente da tabela", () => {
  cy.botaoDeletar1()
})
