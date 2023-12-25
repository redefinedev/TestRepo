
const assert = require("assert");


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

describe("afterEach hook fails", () => {
    afterEach(() => {
        assert.equal(false, true);
    })
    it("test one", () => {
        assert.equal(true, true);
    });
    it("test two", () => {
        assert.equal(true, true);
    });
});

describe("general long suite 1", () => {
    it("test three", function(done) {
        assert.equal(true, true);
        done();
        sleep(2000);
    });
    it("test four", function(done) {
        assert.equal(true, true);
        done();
        sleep(2000);
    });
});

describe("general long suite 2", () => {
    it("test five", function (done) {
        assert.equal(true, true);
        done();
        sleep(2000);
    });
    it("test six", function(done) {
        assert.equal(true, true);
        done();
        sleep(2000);
    });
});

describe("general long suite 3", () => {
    it("test seven", function (done) {
        assert.equal(true, true);
        done();
        sleep(2000);
    });
    it("test eight", function (done){
        assert.equal(true, true);
        done();
        sleep(2000);
    });
});