
describe.skip("skipped suite", () => {
    it("will not run", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });
    }
);

