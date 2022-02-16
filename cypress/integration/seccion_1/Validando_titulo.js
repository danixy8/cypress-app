/// <reference types="Cypress"/>

describe("Seccion 1 Validando el titulo ", () => {

  it("Test validar el titulo de la pagina ", () => {
    cy.visit("https://demoqa.com/text-box ")
    cy.title().should('eq','ToolsQA')

    cy.log("Ok la funcion title funciono bien")
  });

});