/* test file to check that our RR catches all collects all test names */

const assert = require("assert");


describe("failing suite 1", () => {
    it("Test fails", () => {
        assert.equal(false, true);
    });
});
