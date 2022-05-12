describe("Test search requests", () => {
  it("visit homepage", () => {
    cy.intercept("GET", "https://aviasales-api.herokuapp.com/countries", {
      fixture: "countries.json",
    }).as("getCountries");
    cy.intercept("GET", "https://aviasales-api.herokuapp.com/cities", {
      fixture: "cities.json",
    }).as("getCities");
    cy.intercept("GET", "https://aviasales-api.herokuapp.com/airlines", {
      fixture: "airlines.json",
    }).as("getAirlines");

    cy.visit("http://localhost:9000");
    cy.get("[data-hook=mainForm]").should("be.visible");

    cy.wait("@getCountries");
    cy.wait("@getCities");
    cy.wait("@getAirlines");
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

    cy.get("[data-hook=autocompleteOrigin]").as("autocompleteOrigin");
    cy.get("[data-hook=autocompleteDestination]").as("autocompleteDestination");
    cy.get("[data-hook=datepickerDepartInput]").as("datepickerDepartInput");
    cy.get("[data-hook=datepickerDepartWrap] .datepicker-container").as(
      "modalWindow"
    );
    cy.get("[data-hook=submitButton]").as("submitButton");

    cy.get("@autocompleteOrigin").type("Харьков");
    cy.get(".field-origin .autocomplete-content li:first")
      .contains("Харьков, Украина")
      .click();
    cy.get("@autocompleteDestination").type("Париж");
    cy.get(".field-destination .autocomplete-content li:first")
      .contains("Париж, Франция")
      .click();

    cy.get("@datepickerDepartInput").click();
    cy.get("@modalWindow").should("be.visible");

    cy.get(
      "[data-hook=datepickerDepartWrap] .datepicker-container .is-today"
    ).as("today");
    cy.get(
      "[data-hook=datepickerDepartWrap] .datepicker-container .btn-flat"
    ).as("modalButtons");

    cy.get("@today").click();
    cy.get("@today").should("have.class", "is-selected");
    cy.get("@modalButtons").contains("Ok").click();

    cy.get("@submitButton").click();
  });
});
