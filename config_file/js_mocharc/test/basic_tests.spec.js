/* test file to check that mocha supports all kind of nested suites */

const assert = require("assert");
const {add} = require("../src/add.js")

describe("Basic test", () => {
    it("adds many numbers ", () => {
        assert.equal(add(1,2), 1);
        assert.equal(add(4,2), 6);
        assert.equal(add(7,2), 9);
    });

});
