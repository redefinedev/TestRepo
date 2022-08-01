import { equal } from "assert";
import { add } from "../src";

describe('Britts suite to check', () => {
  it('Britt: Should print success', () => {
    equal(add(2, 3), 5);
  });

  it('Britt: should fail', () => {
    equal(add(2, 3), 6);
  });

  // this test is skipped and is presented as pending. need to indetify better a skipped test.
  xit('Britt: should skip', () => {
    //this.skip()
    equal(add(2, 3), 5);
  });
});
