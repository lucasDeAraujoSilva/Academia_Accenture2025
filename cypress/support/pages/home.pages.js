const BTN_ADD = "#addNewRecordButton"
const TABLE = ".ReactTable"
const BTN_EDIT = "#edit-record-1"
const BTN_DELETE = "#delete-record-1"

Cypress.Commands.add("clicaBotaoAdd", () => {
  cy.get(BTN_ADD).should("be.visible").click()
})

Cypress.Commands.add("validaTabela", () => {
  cy.get(TABLE).should("be.visible")
  cy.readFile("cypress/fixtures/dadosTabela.json").then((userData) => {
    cy.get(":nth-child(4) > .rt-tr > :nth-child(1)")
      .should("be.visible")
      .contains(userData.firstName)
    cy.get(":nth-child(4) > .rt-tr > :nth-child(2)")
      .should("be.visible")
      .contains(userData.lastName)
    cy.get(":nth-child(4) > .rt-tr > :nth-child(3)")
      .should("be.visible")
      .contains(userData.age)
    cy.get(":nth-child(4) > .rt-tr > :nth-child(6)")
      .should("be.visible")
      .contains(userData.department)
  })

  cy.get(":nth-child(4) > .rt-tr > :nth-child(4)")
    .should("be.visible")
    .contains(Cypress.env("email"))
  cy.get(":nth-child(4) > .rt-tr > :nth-child(5)")
    .should("be.visible")
    .contains(Cypress.env("salary"))
})

Cypress.Commands.add("botaoEditar", () => {
  cy.get(BTN_EDIT).should("be.visible").click()
})

Cypress.Commands.add("botaoDeletar", () => {
  cy.get(BTN_DELETE).should("be.visible").click()
})

Cypress.Commands.add("botaoDeletar1", () => {
  cy.get(BTN_DELETE).should("not.exist")
})

Cypress.Commands.add("validaEdicaoTabela", () => {
  cy.get(TABLE).should("be.visible")
  cy.readFile("cypress/fixtures/editarDadosTabela.json").then((userData) => {
    cy.get(".rt-tbody > :nth-child(1) > .rt-tr > :nth-child(3)")
      .should("be.visible")
      .contains(userData.age)
  })
})