describe("suite with failing test", () => {
  it("passing test", () => {
    const skip = () => {
        const ctx = getMochaContext()
        return ctx.skip()
    }
    skip()
  });
});
