/* test file to check that mocha supports all kind of nested suites */

const assert = require("assert");
const {add} = require("../src/add.js")

describe("Suite test for mocha", () => {
    describe("Another suite inside", () => {
        it("sums 7 2 ", () => {
            assert.equal(add(7,2), 9);
        });

    });
});

describe("Big suite with many tests", () => {
    describe("First test suite", () => {
        it("sums 1 2 success", () => {
            assert.equal(add(1,2), 3);
        });
        it("sums 1 2 fail", () => {
            assert.equal(add(1,2), 4);
        });

    });

    it("sum 1 2 fail outside of suite", () => {
        assert.equal(add(1,2), 4);
    });

    describe("Second test suite", () => {
        it("sums 5 2 ", () => {
            assert.equal(add(5,2), 7);
        });

    });
});