

var index = 0;
describe("suite that has retry test", () => {
    beforeEach(() => {
        index++;
    });
    it("retry test", () => {
        expect(index).to.equal(3);
    });

    it("doesn't retry", () => {
        expect(true).to.equal(true);
    }
    );
    }
);
