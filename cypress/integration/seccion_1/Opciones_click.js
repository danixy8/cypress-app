/// <reference types="Cypress"/>
require('cypress-plugin-tab')

describe("Opciones de click ", () => {

  it("Click sencillo ", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login ")
    cy.title().should('eq', 'OrangeHRM')
    cy.wait(1000)

    cy.get('#txtUsername').type("Admin")
    .tab().type("admin123")
    cy.wait(1000)

    cy.get('#btnLogin').should("be.visible").click()
    cy.wait(1000)
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.wait(1000)
    cy.get('#menu_admin_Job').click({force:true}) // click forzado 
    
  });

  it("Click en colapsables", () => {
    cy.visit('https://getbootstrap.com/docs/4.1/components/collapse/')
    cy.title().should('eq', 'Collapse · Bootstrap')

    cy.get(':nth-child(11) > p > a.btn').should('be.visible').click()
    cy.wait(2000)
    cy.get(':nth-child(11) > p > button.btn').should('be.visible').click()
  })

});