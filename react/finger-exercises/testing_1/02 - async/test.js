import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    expect(await getData(true)).toBeDefined();
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
    expect(getData(true)).resolves.toBe();
  });
  xit('getData throws error if false is sent as argument (use async/await)', async () => {
  });
  it('getData throws error if false is sent as argument (avoid async/await)', () => {
    expect(getData(false)).rejects.toThrow('error');
  });
});
