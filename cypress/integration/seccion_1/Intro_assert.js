/// <reference types="Cypress"/>

describe("Intro a los asserts ", () => {

  it("Demo de los asserts ", () => {
    cy.visit("https://demoqa.com/automation-practice-form")
    cy.title().should('eq', 'ToolsQA')
    cy.wait(1000)

    cy.get('#firstName').should("be.visible").type("Vianney")
    cy.wait(1000)
    cy.get('#lastName').should("be.visible").type("Perdomo")
    cy.wait(1000)
    cy.get('#userEmail').should("be.visible").should("be.enabled").type("VianneyPerdomo16@gmail.com")
    
  });

});