/* always apssing tests */

const assert = require("assert");

describe('Always Passing Test 7', function() {
    it('should always pass - test 7', function() {
        assert.strictEqual(!false, true);
    });
});

describe('Always Passing Test 8', function() {
    it('should always pass - test 8', function() {
        assert.strictEqual(2 + 2, 4);
    });
});

describe('Always Passing Test 9', function() {
    it('should always pass - test 9', function() {
        assert.ok(1);
    });
});

