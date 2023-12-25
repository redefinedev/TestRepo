
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
    it("test three", () => {
        assert.equal(true, true);
        sleep(2000);
    });
    it("test four", () => {
        assert.equal(true, true);
        sleep(2000);
    });
});

describe("general long suite 2", () => {
    it("test five", () => {
        assert.equal(true, true);
        sleep(2000);
    });
    it("test six", () => {
        assert.equal(true, true);
        sleep(2000);
    });
});

describe("general long suite 3", () => {
    it("test seven", () => {
        assert.equal(true, true);
        sleep(2000);
    });
    it("test eight", () => {
        assert.equal(true, true);
        sleep(2000);
    });
});