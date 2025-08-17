import { faker } from "@faker-js/faker"

const INPUT_FIRST_NAME = "#firstName"
const INPUT_LAST_NAME = "#lastName"
const INPUT_EMAIL = "#userEmail"
const INPUT_AGE = "#age"
const INPUT_SALARY = "#salary"
const INPUT_DEPARTMENT = "#department"
const BTN_SUBMIT = "#submit"

const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const age = faker.number.int({ min: 18, max: 60 }).toString()
const department = faker.person.jobArea()

Cypress.Commands.add("preencheCamposFormulario", () => {
  cy.writeFile("cypress/fixtures/dadosTabela.json", {
    firstName,
    lastName,
    age,
    department,
  })

  const campos = [
    { selector: INPUT_FIRST_NAME, valor: firstName },
    { selector: INPUT_LAST_NAME, valor: lastName },
    { selector: INPUT_EMAIL, valor: Cypress.env("email") },
    { selector: INPUT_AGE, valor: age },
    { selector: INPUT_SALARY, valor: Cypress.env("salary") },
    { selector: INPUT_DEPARTMENT, valor: department },
  ]

  campos.forEach(({ selector, valor }) => {
    cy.get(selector).should("be.visible").clear().type(valor, { delay: 100 })
  })
})

Cypress.Commands.add("clicaBotaoSubmit", () => {
  cy.get(BTN_SUBMIT).should("be.visible").click()
})

Cypress.Commands.add("editarDadosTabela", () => {
  cy.get(INPUT_AGE).should("be.visible").clear().type(age)
  cy.get(INPUT_DEPARTMENT).should("be.visible").clear().type(department)
  cy.writeFile("cypress/fixtures/editarDadosTabela.json", {
    age: age,
    department: department,
  })
})

Cypress.Commands.add("preencheAlgunsCamposForm", () => {
  cy.get(INPUT_FIRST_NAME)
    .should("be.visible")
    .clear()
    .type(firstName, { delay: 100 })

  cy.get(INPUT_LAST_NAME)
    .should("be.visible")
    .clear()
    .type(lastName, { delay: 100 })
})

Cypress.Commands.add("verificaCamposVazioFormulario", () => {
  const camposObrigatorios = [
    INPUT_EMAIL,
    INPUT_AGE,
    INPUT_SALARY,
    INPUT_DEPARTMENT,
  ]
  camposObrigatorios.forEach((campo) => {
    cy.get(campo)
      .should("be.visible", "have.attr", "required")
      .and("have.css", "border-color", "rgb(220, 53, 69)")
  })
})