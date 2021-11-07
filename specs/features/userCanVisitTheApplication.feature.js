describe('"User visits the application url', () => {
  const entries =
    '[{"name": "John Doe", "phone": "031-121212", "twitter": "@john_doe"}, {"name": "Jane Doe", "phone": "+1 202-121212", "twitter": "@jane_doe"}]';
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(window) {
        window.localStorage.setItem("entries", entries);
      },
    });
    cy.get("[name=address_list] ul").as("displayList");
  });
  it("is expected to see a header", () => {
    cy.get("h1").should("contain.text", "Address Book");
  });
  it("is expected to see an address list", () => {
    cy.get("@displayList").should("exist").and("be.visible");
  });
  it("is expected to display 2 entries", () => {
    cy.get("@displayList").children().should("have.length", 2);
  });
});
