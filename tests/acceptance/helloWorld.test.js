import axios from 'axios';

import baseEndpoint from './baseEndpoint';

describe('Hello world handler', () => {
  test('responds with hello message', async () => {
    const response = await axios.get(`${baseEndpoint}/hello-world`);

    expect(response.status).toEqual(200);
    expect(response.data).toEqual({ message: 'Hello world!' });
  });
});
