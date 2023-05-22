

describe("suite with skipped test", () => {
    it.skip("skipped test", () => {
        expect(true).to.equal(false);
    });
    }
);
