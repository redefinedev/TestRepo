/* test file to check that our RR catches all collects all test names */

const assert = require("assert");


describe("Suite with the same suite name", () => {
    it("Test name is different 1", () => {
        assert.equal(9, 9);
    });
});

describe("Suite with the same suite name", () => {
    it("Test name is different 2", () => {
        assert.equal(9, 9);
    });
});

describe("Suite that contains a suite with the same name", () => {
    describe("Suite that contains a suite with the same name", () => {
        it("sum 7 2 ", () => {
            assert.equal(9, 9);
        });

    });
});

describe("Suite that contains multiple tests with the same name", () => {
    it("Test with same name", () => {
        assert.equal(true, true);
    });
    it("Test with same name", () => {
        assert.equal(true, true);
    });
    it("Test with same name", () => {
        assert.equal(true, true);
    });
});

describe("A suite with the same test name 1", () => {
    it("unique name", () => {
        assert.equal(true, true);
    });
})

describe("A suite with the same test name 2", () => {
    it("unique name", () => {
        assert.equal(true, true);
    });
})

