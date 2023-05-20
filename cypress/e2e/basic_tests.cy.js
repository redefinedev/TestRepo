
/* add tests before and after and check the time to first failure parameter */
describe("suite with failing test", () => {
    it("first test not failing", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });

    it("second test not failing", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });

    it("failing test", () => {
	    // this test should fail
        expect(true).to.equal(false);
    });
    }
);
