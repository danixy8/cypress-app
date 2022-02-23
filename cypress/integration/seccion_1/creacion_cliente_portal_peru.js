/// <reference types="Cypress"/>
require('cypress-plugin-tab')
var Fakerator = require("fakerator");
var fakerator = Fakerator("es-ES");

describe("Ejemplo funcion Tab ", () => {

  it("Type con Tab ", () => {
    cy.visit("http://localhost:4200/#/login")
    cy.wait(2000)
    cy.get(".dropdown-toggle").click()
    cy.get(".dropdown-menu > :nth-child(3) > a").click()
    cy.get("#login-org").type("PE20514968099")
    cy.get("#login-rut").type("PE20514968099")
    cy.get("#login-password").type("admin")
    cy.get("#login-form > .btn-lg").click()
    cy.wait(5000)
    cy.get(".justify-content-center > :nth-child(2) > .btn").click()
    cy.get("li.dropdown > :nth-child(1)").click()
    cy.get(".show > :nth-child(2) > .dropdown-toggle").click()
    cy.get("div.navbar-collapse > li > ul > li:nth-child(2) > div > a:nth-child(2)").click({ force: true })
    cy.wait(5000)
    cy.get('[formcontrolname="identificationType"]').select('RUC')
    cy.get('[formcontrolname="identNumber"]').type(fakerator.random.number(10000000000, 19999999999))
    cy.get('[formcontrolname="tipoPersona"]').select('Natural')
    cy.get('[formcontrolname="primerNombre"]').type(fakerator.names.firstName())
    cy.get('[formcontrolname="segundoNombre"]').type(fakerator.names.firstName())
    cy.get('[formcontrolname="primerApellido"]').type(fakerator.names.lastName())
    cy.get('[formcontrolname="segundoApellido"]').type(fakerator.names.lastName())

    // cy.title().should('eq', 'ToolsQA')
    // cy.wait(2000)

    // cy.get("#firstName").type("Daniel")
    // .tab().type("Gutierrez")
    // .tab().type("Danielguve@gmail.com")
  });

});