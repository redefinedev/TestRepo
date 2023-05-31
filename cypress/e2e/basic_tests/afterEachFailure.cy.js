
describe("suite with after each failure", () => {
    afterEach(() => {
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
