/* test file to check that our RR catches all collects all test names */

const assert = require("assert");


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

describe("First big suite", () => {
    it("first test", function (done)  {
        assert.equal(8, 9);
        done();
        sleep(3000);
    });
});


describe("second big Suite contains a suite", () => {
    describe("inside suite", () => {
        it("sum 7 2 ", function(done) {
            assert.equal(9, 9);
            done();
            sleep(3000);
        });

    });
});
