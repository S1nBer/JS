const date = new Date();
const strDate = `${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
}`;

describe("Test search requests", () => {
  before(() => {
    cy.reachThePage();
  });

  it("Correct switching between currencies", () => {
    cy.switchCurrency();
  });

  it("Form submit with correct request params", () => {
    cy.initElements();
    cy.fillTheForm();
    cy.intercept(
      "GET",
      "https://aviasales-api.herokuapp.com/prices/cheap*",
      (req) => {
        expect(req.query.currency).to.equal("EUR");
        expect(req.query.depart_date).to.equal(strDate);
        expect(req.query.origin).to.equal("HRK");
        expect(req.query.destination).to.equal("PAR");
      }
    );

    cy.get("@submitButton").click();
  });
});
