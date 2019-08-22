import pow from '.';

describe('01 - matchers', () => {
  it('pow returns the power based on two numeric arguments', () => {
    expect(pow(3, 2)).toBe(9);
  });
  it('pow returns undefined if there is no arguments', () => {
    expect(pow()).toBeUndefined();
  });
  it('pow returns undefined if there is just one argument', () => {
    expect(pow(3)).toBeUndefined();
  });
  xit('pow returns an array of power results if array of pairs are sent as arguments', () => {
  });
  xit('pow returns undefined in the right position of the result array if pair is not as expected', () => {
  });
});
