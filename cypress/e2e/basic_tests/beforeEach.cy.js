
describe("Suite with beforeEach", () => {
    it("one second test", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });

    beforeEach(() => {
        console.log("beforeEach");
        cy.wait(600);
    });
});
