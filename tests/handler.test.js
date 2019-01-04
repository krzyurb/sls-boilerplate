import Handler from '../src/handlers/helloWorld/handler';

describe('Hello function', () => {
  test('responds with hello message', async () => {
    const result = await new Handler().execute();

    const expected = {
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
    };

    expect(result).toEqual(expected);
  });
});
