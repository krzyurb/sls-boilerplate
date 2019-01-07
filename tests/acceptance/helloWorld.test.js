import axios from 'axios';

describe('Hello world handler', () => {
  test('responds with hello message', async () => {
    const response = await axios.get(`${process.env.TEST_URL}/hello-world`);

    expect(response.status).toEqual(200);
    expect(response.data).toEqual({ message: 'Hello world!' });
  });
});
