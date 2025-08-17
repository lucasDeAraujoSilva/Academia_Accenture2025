import { And, Then } from "cypress-cucumber-preprocessor/steps"

And("não preencho todos os campos obrigatórios com dados válidos", () => {
  cy.preencheAlgunsCamposForm()
})

Then("os campos vazios devem ficar vermelho", () => {
  cy.verificaCamposVazioFormulario()
})