describe("first cypress test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/board");
  });

  it("real first case", () => {
    cy.get("div[data-testid='article']").should("be.visible");
  });
});
