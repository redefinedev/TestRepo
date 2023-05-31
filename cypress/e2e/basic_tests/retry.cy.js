

var index = 0;
describe("suite that has retry test", () => {
    it("retry test", () => {
        if (index < 1) {
            index++;
            expect(true).to.equal(false);
        }
        expect(true).to.equal(true);
    });

    }
);
