
describe("suite with before failure", () => {
    before(() => {
        expect(true).to.equal(false);
    });

    it("before passing test", () => {
        expect(true).to.equal(true);
    });

    it("before another test in suite", () => {
        expect(true).to.equal(true);
    });

    it("before failing test in suite", () => {
        expect(true).to.equal(false);
    });

    }
);
