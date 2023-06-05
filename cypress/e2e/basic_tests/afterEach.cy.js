
describe("Suite with afterEach", () => {
    it("first short test", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });

    afterEach(() => {
        console.log("afterEach");
        cy.wait(600);
    });
});
