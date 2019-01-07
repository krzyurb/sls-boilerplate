import sinon from 'sinon';

import HelloWorldHandler from '../../src/handlers/helloWorld/handler';
import RandomNumberService from '../../src/handlers/helloWorld/RandomNumberService';

describe('Hello function', () => {
  let handler;
  let randomNumberService;

  beforeEach(() => {
    randomNumberService = new RandomNumberService();

    handler = new HelloWorldHandler({
      randomNumberService,
    });
  });

  test('responds with hello message', async () => {
    sinon.stub(randomNumberService, 'random').returns(12);

    const result = await handler.execute();

    const expected = {
      body: JSON.stringify({
        message: 'Hello world!',
        number: 12,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
    };

    expect(result).toEqual(expected);
  });
});
