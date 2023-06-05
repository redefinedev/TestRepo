before(function(){
    cy.task("log", "test4 beforeAll hook")
});
beforeEach(function() {
    cy.task("log", "test4 beforeEach hook")
});

describe("suite4", () => {
    after(function(){
        cy.task("log", "test4 after describe hook")
        expect(true).to.equal(false)
    });
    beforeEach(function() {
        cy.task("log", "test4 beforeEach describe hook")
    });
    it("test4 pass", () => {
        expect(true).to.equal(true);
    });
});