
describe.skip("skipped suite", () => {
    it("first test not failing", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });
    }
);

