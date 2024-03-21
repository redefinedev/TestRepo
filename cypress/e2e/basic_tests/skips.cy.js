describe("suite with failing test", () => {
  it("passing test", () => {
    this.skip();
    expect(true).to.equal(true);
  });
});
