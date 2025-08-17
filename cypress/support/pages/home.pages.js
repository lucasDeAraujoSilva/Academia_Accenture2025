const BTN_ADD = "#addNewRecordButton"
const TABLE = ".ReactTable"
const BTN_EDIT = "#edit-record"
const BTN_DELETE = "#delete-record"

Cypress.Commands.add("clicaBotaoAdd", () => {
  cy.get(BTN_ADD).should("be.visible").click()
})

Cypress.Commands.add("validaTabela", () => {
  cy.get(TABLE).should("be.visible")

  cy.readFile("cypress/fixtures/dadosTabela.json").then((userData) => {
    const tableValues = [
      userData.firstName,
      userData.lastName,
      userData.age,
      Cypress.env("email"),
      Cypress.env("salary"),
      userData.department,
    ]

    tableValues.forEach((value, index) => {
      cy.get(`:nth-child(4) > .rt-tr > :nth-child(${index + 1})`)
        .should("be.visible")
        .contains(value)
    })
  })
})

Cypress.Commands.add("botaoEditar", (linha) => {
  cy.get(`${BTN_EDIT}-${linha}`).should("be.visible").click()
})

Cypress.Commands.add("botaoDeletar", () => {
  const linha = Cypress.env("deletaLinha")
  cy.get(`${BTN_DELETE}-${linha}`).should("be.visible").click()
})

Cypress.Commands.add("botaoDeletar1", () => {
  const linha = Cypress.env("deletaLinha")
  cy.get(`${BTN_DELETE}-${linha}`).should("not.exist")
})

Cypress.Commands.add("validaEdicaoTabela", (linha) => {
  cy.get(TABLE).should("be.visible")
  cy.readFile("cypress/fixtures/editarDadosTabela.json").then((userData) => {
    cy.get(`.rt-tbody > :nth-child(${linha}) > .rt-tr > :nth-child(3)`)
      .should("be.visible")
      .contains(userData.age)
  })
})
