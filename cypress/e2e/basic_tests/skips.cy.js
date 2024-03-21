describe("suite with failing test", () => {
  it("passing test", () => {
    const getMochaContext = () => cy.state("runnable").ctx;
    const skip = () => {
      const ctx = getMochaContext();
      return ctx.skip();
    };
    skip();
  });
});
