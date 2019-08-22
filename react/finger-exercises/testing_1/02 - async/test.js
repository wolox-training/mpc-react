import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    const data = await getData(true);
    expect(data).toBeDefined();
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
    expect(getData(true)).resolves.toBe();
  });
  it('getData throws error if false is sent as argument (use async/await)', async () => {
    await getData(false)
      .catch(data => expect(data).toBeTruthy());
  });
  xit('getData throws error if false is sent as argument (avoid async/await)', () => {
  });
});
