
describe("suite with another passing test", () => {
    it("should pass", () => {
        expect(true).to.equal(true);
        cy.wait(3000);
    });
}
);
