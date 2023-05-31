

var index = 0;
describe("suite that has retry test", () => {
    it("retry test", () => {
        cy.log("index - " + index)
        if (index < 1) {
            index++;
            cy.log("inside loop")
            expect(true).to.equal(false);
        }
        expect(true).to.equal(true);
    });

    }
);
