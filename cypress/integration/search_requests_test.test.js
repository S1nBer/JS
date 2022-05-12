/* const { cy } = require("date-fns/locale"); */

describe("Test search requests", () => {
  before(() => {
    cy.reachThePage();
  });

  beforeEach(() => {
    cy.initElements();
    cy.fillTheForm();
  });

  it("Form submit with correct request params", () => {
    cy.intercept(
      "GET",
      "https://aviasales-api.herokuapp.com/prices/cheap*",
      (req) => {
        console.log(req);
        expect(req.query.currency).to.equal("USD");
        expect(req.query.depart_date).to.equal("2022-05");
        expect(req.query.origin).to.equal("HRK");
        expect(req.query.destination).to.equal("PAR");
      }
    );

    cy.get("@submitButton").click();
  });
});
