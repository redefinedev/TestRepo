const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

describe('very long test suite', () => {
    const operations = []
    const indexes = arrayRange(0,9,1);
    indexes.forEach((value) =>{
      operations.push(
        {
          name: `test#${value}`,
          value: value,
        }
      )
    })
  
    // dynamically create a single test for each operation in the list
    operations.forEach((operation) => {
      // derive test name from data
      it(`${operation.name}`, () => {
        // all even numbers pass, all odd ones fail
        cy.wrap(eval(operation.value % 2)).should('equal', 0)
      })
    })
  })