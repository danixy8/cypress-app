/// <reference types="Cypress"/>
require('cypress-plugin-tab')

describe("Ejemplo funcion Tab ", () => {

  it("Type con Tab ", () => {
    cy.visit("https://demoqa.com/automation-practice-form")
    cy.title().should('eq', 'ToolsQA')
    cy.wait(2000)

    cy.get("#firstName").type("Daniel")
    .tab().type("Gutierrez")
    .tab().type("Danielguve@gmail.com")
  });

});