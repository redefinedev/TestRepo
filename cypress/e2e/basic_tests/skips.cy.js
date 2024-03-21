describe("suite with failing test", () => {
  it.skip("failing test", () => {
    // this test should fail
    // skip
  });

  it("passing test", () => {
    expect(true).to.equal(true);
  });

  it("failing test", () => {
    expect(true).to.equal(false);
  });
});
