// packages/demo-1/tests/sum.test.ts

import { sum } from '../src/sum';

describe('sum function', () => {
  it('should return 3 when adding 1 and 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return -1 when adding -2 and 1', () => {
    expect(sum(-2, 1)).toBe(-1);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
