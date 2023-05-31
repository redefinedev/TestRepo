
describe("suite with after each failure", () => {
    after(() => {
        expect(true).to.equal(false);
    });

    it("just a test", () => {
        expect(true).to.equal(true);
    });

    it("just another a test", () => {
        expect(true).to.equal(true);
    });

    it("just a third a test", () => {
        expect(true).to.equal(true);
    });

    }
);
