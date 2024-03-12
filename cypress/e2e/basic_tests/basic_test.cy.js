
/* add hooks to check that once deselected these hooks won't run */

beforeEach(() => {
    cy.wait(500);
});

before(() => {
    cy.wait(500);
});

describe("basic parametrize suite test", () => {
    let data = [
        { name: "test1", age: 0 },
        { name: "test2", age: 1 },
        { name: "test3", age: 8 },
        { name: "test4", age: 20 },
        { name: "test5", age: 30 },
        { name: "test6", age: 40 },
    ];

    data.forEach((data) => {
        it(`parametrize test ${data.name}`, () => {
            expect(data.age).to.be.greaterThan(10);
            cy.wait(1000);
        });
    })
    ;

    }
);
