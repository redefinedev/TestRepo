/* always apssing tests */

const assert = require("assert");

describe('Always Passing Test 1', function() {
    it('should always pass - test 1', function() {
        assert.strictEqual(1, 1);
    });
});

describe('Always Passing Test 2', function() {
    it('should always pass - test 2', function() {
        assert.strictEqual(true, true);
    });
});

describe('Always Passing Test 3', function() {
    it('should always pass - test 3', function() {
        assert.strictEqual('Hello', 'Hello');
    });
});

