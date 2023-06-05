

describe("Suite with before", () => {
    it("another one second test", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });

    before(() => {
        console.log("before");
        cy.wait(600);
    });
});
