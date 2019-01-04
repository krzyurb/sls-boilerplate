import BaseHandler from '../../core/BaseHandler';

export default class HelloWorldHandler extends BaseHandler {
  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  async process(event, context) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
    };
  }
}
