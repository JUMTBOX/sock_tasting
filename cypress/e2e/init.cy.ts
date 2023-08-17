describe("first cypress test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("real first case", () => {
    cy.get("div[data-testid='R u there?']").should("be.visible");
  });
});
