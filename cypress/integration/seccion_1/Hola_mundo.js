
describe("Bienvenido al curso de cypress seccion 1", () => {

  it("mi primer test -> Hola mundo", () => {
    cy.log("Hola mundo");
    // cy.wait(4000)
  });

  it('segundo test -> campo name', () => {
    cy.visit("https://demoqa.com/text-box")

    cy.get("#userName").type("Daniel")
    cy.wait(4000)
  });

})