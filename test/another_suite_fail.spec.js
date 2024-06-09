/* test file to check that our RR catches all collects all test names */

const assert = require("assert");


describe("another Suite in file", () => {
    it("Test fails", () => {
        assert.equal(false, true);
    });

});
