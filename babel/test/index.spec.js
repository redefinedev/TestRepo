import { equal } from "assert";
import { add } from "../src";

describe('Babel usage suite', () => {
  it('should add numbers correctly', () => {
    equal(add(2, 3), 5);
  });

  it('should fail', () => {
    equal(add(2, 3), 6);
  });

  // this test is skipped and is presented as pending. need to indetify better a skipped test.
  it('should skip', () => {
    equal(add(2, 3), 5);
  });
});
