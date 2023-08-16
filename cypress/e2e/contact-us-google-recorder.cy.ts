describe("Recording 16. 8. 2023 at 15:01:31", () => {
  it("tests Recording 16. 8. 2023 at 15:01:31", () => {
    //cy.viewport(1399, 1003);
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
   // cy.get("#contact_form > input:nth-of-type(1)").click();
    cy.get("#contact_form > input:nth-of-type(1)").type("Petr");
    //cy.get("#contact_form > input:nth-of-type(2)").click();
    cy.get("#contact_form > input:nth-of-type(2)").type("Nový");
    //cy.get("input:nth-of-type(3)").click();
    //cy.get("input:nth-of-type(3)").type("petrnovy@");
    cy.get("input:nth-of-type(3)").type("petrnovy@seznam.cz");
    //cy.get("textarea").click();
    cy.get("textarea").type("Mám hotovo.");
    cy.get("input[type='submit']").click();
    cy.location("href").should("eq", "https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html");
  });
});
