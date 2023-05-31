
describe("suite with after failure", () => {
    after(() => {
        expect(true).to.equal(false);
    });

    it("maybe a test", () => {
        expect(true).to.equal(true);
    });

    it("second test in suite", () => {
        expect(true).to.equal(true);
    });

    it("third test in suite", () => {
        expect(true).to.equal(true);
    });

    }
);
