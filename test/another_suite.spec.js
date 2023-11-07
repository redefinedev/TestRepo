/* test file to check that our RR catches all collects all test names */

const assert = require("assert");



describe("another Suite in file", () => {
    before(() => {
        console.log("in before suite");
    });
    after(() => {
        console.log("in after suite");
    });

    it("Test passes", () => {
        assert.equal(true, true);
    });

});
