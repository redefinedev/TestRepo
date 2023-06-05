before(function(){
  cy.task("log", "test1 beforeAll hook")
});
beforeEach(function() {
  cy.task("log", "test1 beforeEach hook")
});

describe("suite1", () => {
  before(function(){
      cy.task("log", "test1 beforeAll describe hook")
  });
  beforeEach(function() {
      cy.task("log", "test1 beforeEach describe hook")
  });
  it("test1 pass", () => {
      expect(true).to.equal(true);
  });
});