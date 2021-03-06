/// <reference types="Cypress"/>
require('cypress-plugin-tab')
var Fakerator = require("fakerator");
var fakerator = Fakerator("es-ES");

describe("Crear Persona Natural", () => {

  it("crear cliente con RUC", () => {
    cy.visit(`${Cypress.env('baseUrl')}login`)
    cy.wait(5000)
    cy.get(".dropdown-toggle").click()
    cy.get(".dropdown-menu > :nth-child(3) > a").click()
    cy.get("#login-org").type(Cypress.env('org'))
    cy.get("#login-rut").type(Cypress.env('rut'))
    cy.get("#login-password").type(Cypress.env('password'))
    cy.get("#login-form > .btn-lg").click()
    cy.wait(7000)
    cy.get("#btn-caucion").click()
    cy.wait(5000)
    cy.visit(`${Cypress.env('baseUrl')}mantenedor-cliente?option=FORMCLIENTE`)
    cy.get('[formcontrolname="identificationType"]').select('RUC')
    cy.get('[formcontrolname="identNumber"]').type(`20${fakerator.random.number(100000000, 199999999)}`)
    cy.get('[formcontrolname="tipoPersona"]').select('Natural')
    cy.get('[formcontrolname="primerNombre"]').type('TEST')
    cy.get('[formcontrolname="segundoNombre"]').type(fakerator.names.firstNameM())
    cy.get('[formcontrolname="primerApellido"]').type(fakerator.names.lastName())
    cy.get('[formcontrolname="segundoApellido"]').type(fakerator.names.lastName())
    cy.get('[formcontrolname="fechaNacimiento"]').click().type(`0${fakerator.random.number(1, 9)}/0${fakerator.random.number(1, 9)}/2021`).type('{enter}')
    cy.get('[formcontrolname="tipoEmpresa"]').select('Privada')
    cy.get('[formcontrolname="nivelEmpresa"]').select('Pequeña Empresa')
    cy.get('[formcontrolname="nroEmpleados"]').type(fakerator.random.number(10, 40))
    cy.get('.btn.btn-default.btn-secondary.form-control.ui-select-toggle').click({force: true, multiple: true}).wait(1000)
    cy.get('div > ul > li:nth-child(4) > div > a > div').click({force: true, multiple: true })
    cy.get('[formcontrolname="regimenDD"]').select('GENERAL')
    cy.get('[formcontrolname="condicionSO"]').select('NO')
    cy.get('.col-md-8 > :nth-child(1) > span').click()
    cy.get('[id="telefonoPrincipal"]').type(fakerator.phone.number())
    cy.get('[id="telefonoAdicional"]').type(fakerator.phone.number())
    cy.get('[id="correoElectronico"]').type(fakerator.internet.email())
    cy.get('[formcontrolname="correoElectronicoFacturacion"]').type(fakerator.internet.email())
    cy.get('[formcontrolname="pais"]').select('LIMA').wait(1000)
    cy.get('[formcontrolname="estado"]').select('BARRANCA').wait(1000)
    cy.get('[formcontrolname="distrito"]').select('PARAMONGA')
    cy.get('[formcontrolname="direccion"]').type(fakerator.address.street())
    cy.get('[formcontrolname="tipoCuenta"]').select('Cuenta corriente')
    cy.get('[formcontrolname="banco"]').select('Banco Falabella')
    cy.get('[formcontrolname="nroCuenta"]').type(fakerator.random.number(10000000000, 19999999999))
    cy.get('.form-check-input[value="GN"]').click()
    cy.get('.panel-body > .btn.btn-create').click()
    cy.get('[formcontrolname="tipoContacto"]').select('Aval')
    cy.get('[formcontrolname="tipoPersona"][ng-reflect-is-disabled="false"]').select('Jurídica')
    cy.get('[formcontrolname="razonSocial"]').type(fakerator.company.name())
    cy.get('[formcontrolname="tipoIdentificacion"]').select('RUC')
    cy.get('.panel-body .card-body [formcontrolname="nroIdentificacion"]').type(`20${fakerator.random.number(100000000, 199999999)}`)
    cy.get('section.info-rep input.form-create[formcontrolname="direccion"]').type(fakerator.address.street())
    cy.get('input.form-create[formcontrolname="numTelefono"]').type(fakerator.phone.number())
    cy.get('input.form-create[formcontrolname="extension"]').type(fakerator.random.number(200, 250))
    cy.get('input.form-create[formcontrolname="celular"]').type(fakerator.phone.number())
    cy.get('input.form-create[formcontrolname="email"]').type(fakerator.internet.email())
    cy.get('[formcontrolname="tipoIdentRepr"]').select('RUC')
    cy.get('[formcontrolname="identNumberRepr"]').type(`20${fakerator.random.number(100000000, 199999999)}`)
    cy.get('[formcontrolname="dsNombresRepr"]').type(fakerator.names.name())
    cy.get('[formcontrolname="cargo"]').select('CEO / Gerente General')
    // cy.title().should('eq', 'ToolsQA')
    // cy.wait(2000)

    // cy.get("#firstName").type("Daniel")
    // .tab().type("Gutierrez")
    // .tab().type("Danielguve@gmail.com")
  });

});