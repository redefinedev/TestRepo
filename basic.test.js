/* add hooks to check that once deselected these hooks won't run */
beforeEach(() => {
    setTimeout(() => {
        expect(true).toBe(true);
    }, 500);
});

beforeAll(() => {
    setTimeout(() => {
        expect(true).toBe(true);
    }, 500);
});

describe("basic suite test", () => {
    it("first test not failing", () => {
        setTimeout(() => {
            expect(true).toBe(true);
        }, 500);
    });

    }
);
