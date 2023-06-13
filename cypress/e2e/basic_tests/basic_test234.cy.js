
/* add hooks to check that once deselected these hooks won't run */

beforeEach(() => {
    cy.wait(500);
});

before(() => {
    cy.wait(500);
});

describe("basic suite test", () => {
    it("first test not failing", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });

    }
);
