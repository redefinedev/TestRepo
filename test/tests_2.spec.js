/* always apssing tests */

const assert = require("assert");

describe('Always Passing Test 4', function() {
    it('should always pass - test 4', function() {
        assert.strictEqual([1, 2, 3].length, 3);
    });
});

describe('Always Passing Test 5', function() {
    it('should always pass - test 5', function() {
        assert.deepStrictEqual({ key: 'value' }, { key: 'value' });
    });
});

describe('Always Passing Test 6', function() {
    it('should always pass - test 6', function() {
        assert.strictEqual(typeof 'string', 'string');
    });
});

