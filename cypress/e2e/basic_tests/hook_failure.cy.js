
/* add hooks to check that once deselected these hooks won't run */
let counter = 1;
beforeEach(() => {
    
    counter++;
    if (counter === 2) {
        throw new Error("hook failed");
    }
});


describe("basic suite test", () => {
    it("first test not failing", () => {
        expect(true).to.equal(true);
    });
    it("second test not failing", () => {
        expect(true).to.equal(true);
    });
    it("third test not failing", () => {
        expect(true).to.equal(true);
    });
    it("fourth test not failing", () => {
        expect(true).to.equal(true);
    });
    it("fifth test not failing", () => {
        expect(true).to.equal(true);
    });

    }
);
