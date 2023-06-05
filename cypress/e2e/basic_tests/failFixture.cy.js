before(function(){
    cy.task("log", "test3 beforeAll hook")
});
beforeEach(function() {
    cy.task("log", "test3 beforeEach hook")
});

describe("suite3", () => {
    before(function(){
        cy.task("log", "test3 beforeAll describe hook")
        expect(true).to.equal(false)
    });
    beforeEach(function() {
        cy.task("log", "test3 beforeEach describe hook")
    });
    it("test3 pass", () => {
        expect(true).to.equal(true);
    });
});