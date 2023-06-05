before(function(){
    cy.task("log", "test2 beforeAll hook")
});
beforeEach(function() {
    cy.task("log", "test2 beforeEach hook")
});

describe("suite2", () => {
    before(function(){
        cy.task("log", "test2 beforeAll describe hook")
    });
    beforeEach(function() {
        cy.task("log", "test2 beforeEach describe hook")
    });
    it("test2 fails", () => {
        expect(true).to.equal(false);
    });
});
  