
/* add tests before and after and check the time to first failure parameter */
describe("suite with failing test", () => {
    it("first test not failing", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });

    it("second test not failing", () => {
        expect(true).to.equal(true);
        cy.wait(1000);
    });

    it("failing test", () => {
        expect(true).to.equal(false);
    });
    }
);

describe('generated from a list', () => {
  const operations = [
    {
      name:"pass0",
      op: '2 + 2',
      value: 4,
    },
    {
      name: "pass1",
      op: '10 - 15',
      value: -5,
    },
    {
      name: "pass2",
      op: '3 * 17',
      value: 51,
    },
    {
        name: "fails3",
        op: '1 + 1',
        value: 3,
      },
  ]

  // dynamically create a single test for each operation in the list
  operations.forEach((operation) => {
    // derive test name from data
    it(`computes ${operation.name}`, () => {
      cy.wrap(eval(operation.op)).should('equal', operation.value)
    })
  })
})