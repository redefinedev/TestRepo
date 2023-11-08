/* test file to check that our RR catches all collects all test names */

const assert = require("assert");



describe("before hook fails", () => {
    before(() => {
        assert.equal(false, true);
    })
    it("test one", () => {
        assert.equal(true, true);
    });
    it("test two", () => {
        assert.equal(true, true);
    });
});

describe("beforeEach hook fails", () => {
    beforeEach(() => {
        assert.equal(false, true);
    })
    it("Test three", () => {
        assert.equal(true, true);
    });
    it("Test four", () => {
        assert.equal(true, true);
    });
});

describe("afterEach hook fails", () => {
    afterEach(() => {
        assert.equal(false, true);
    })
    it("Test five", () => {
        assert.equal(true, true);
    });
    it("Test six", () => {
        assert.equal(true, true);
    });
});

describe("after hook fails", () => {
    after(() => {
        assert.equal(false, true);
    })
    it("Test seven", () => {
        assert.equal(true, true);
    });
    it("Test eight", () => {
        assert.equal(true, true);
    });
});
