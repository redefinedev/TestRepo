/* test file to check that our RR catches all collects all test names */

const assert = require("assert");



describe("another Suite in file", () => {
    before(() => {
        console.log("in before suite");
    });
    beforeEach(() => {
        console.log("in before each");
    });
    afterEach(() => {
        console.log("in after each");
    });
    after(() => {
        console.log("in after suite");
    });

    it("Test passes", () => {
        assert.equal(true, true);
    });

});
