
describe.skip("skipped suite in another file", () => {
    it("first test not failing", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });
    }
);


describe("suite with skipped test", () => {
    it.skip("failing test", () => {
        // this test should fail
        expect(true).to.equal(false);
    });
    }  
);