describe("first cypress test", () => {
  beforeEach(() => {
    console.log("test 시작");
    cy.visit("http://localhost:3000/");
  });

  it("real first case", () => {
    cy.get("div[test-id='R u there?']").should("be.visible");
  });
});
