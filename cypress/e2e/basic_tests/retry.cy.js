

describe("suite that has retry test", () => {
    it("retry test", () => {
        expect(true).to.equal(false);
    });

    it("doesn't retry", () => {
        expect(true).to.equal(true);
    }
    );
    }
);
