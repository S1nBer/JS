describe("Form", () => {
  it("When visiting the home page, the form is visible", () => {
    cy.visit("http://0.0.0.0:9000/");
    cy.get("[data-hook=mainForm]").should("be.visible");
  });
});
