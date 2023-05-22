
describe.skip("skipped suite in another file", () => {
    it("describe is skipped", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });
    }
);


describe("suite with skipped test", () => {
    it.skip("im skipped", () => {
        // this test should fail
        expect(true).to.equal(false);
    });
    }  
);