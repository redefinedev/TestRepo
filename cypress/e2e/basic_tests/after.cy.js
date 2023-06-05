

describe("Suite with after", () => {
    it("last one second test", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });

    after(() => {
        console.log("after");
        cy.wait(600);
    });
});
