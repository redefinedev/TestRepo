
describe("suite with before each failure", () => {
    beforeEach(() => {
        expect(true).to.equal(false);
    });

    it("passing test", () => {
        expect(true).to.equal(true);
    });

    it("another test in suite", () => {
        expect(true).to.equal(true);
    });

    it("failing test in suite", () => {
        expect(true).to.equal(false);
    });

    }
);
