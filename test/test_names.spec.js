/* test file to check that our RR catches all collects all test names */

const assert = require("assert");


describe("First big suite", () => {
    it("first test", () => {
        assert.equal(9, 9);
    });
});

describe("Second big suite", () => {
    it("Test 2", () => {
        assert.equal(9, 9);
    });
});

describe("Third big Suite contains a suite", () => {
    describe("inside suite", () => {
        it("sum 7 2 ", () => {
            assert.equal(9, 9);
        });

    });
});

describe("Fourth Suite", () => {
    it("Test fails", () => {
        assert.equal(false, true);
    });
    it("Test passes", () => {
        assert.equal(true, true);
    });
});

function add(...numbers) {
    return numbers.reduce((sum, number) => {
      return sum + number;
    })
}

describe('add()', function() {
    var tests = [
      {args: [1, 2], expected: 3},
      {args: [1, 2, 3], expected: 6},
      {args: [1, 2, 3, 4], expected: 10}
    ];
  
    tests.forEach(function(test) {
      it('correctly adds ' + test.args.length + ' args', function() {
        var res = add.apply(null, test.args);
        assert.equal(res, test.expected);
      });
    });
   });
