/* test file to check that our RR catches all skipped tests */

const assert = require("assert");
const {add} = require("../src/add.js")


/* test that checks that rr counts skipped test inside whole suite to skip */
xdescribe("Suite to be skipped 1", () => {
    it("should be skipped first", () => {
        assert.equal(add(4,5), 9);
    });
});

/* test that checks that rr counts 2 tests to be skipped in 1 suite */
xdescribe("Suite to be skipped contains 2 tests", () => {
    it("first test to skip", () => {
        assert.equal(add(4,5), 9);
    });
    it("second test to skip", () => {
        assert.equal(add(4,5), 9);
    });
}); 


describe("Suite that contains suite to skip", () => {
    xdescribe("This suite will be skipped", () => {
        it("Test inside suite to skip", () => {
            assert.equal(add(4,5), 9);
        });
    });
});


describe("Suite that contains some tests to skip", () => {
    it("runs with success", () => {
        assert.equal(add(4,5), 9);
    });
    xit("should be skipped first", () => {
        assert.equal(add(4,5), 9);
    });
    xit("should be skipped second", () => {
        assert.equal(add(4,5), 9);
    });
});

describe("Suite that contains only tests to skip", () => {
    xit("should be skipped first", () => {
        assert.equal(add(4,5), 9);
    });
    xit("should be skipped second", () => {
        assert.equal(add(4,5), 9);
    });
    xit("should be skipped third", () => {
        assert.equal(add(4,5), 9);
    });
});
