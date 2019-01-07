import RandomNumberService from '../../../src/handlers/helloWorld/RandomNumberService';

describe('RandomNumberService', () => {
  test('random', async () => {
    const result = new RandomNumberService().random();
    expect(typeof result).toBe('number');
  });
});
