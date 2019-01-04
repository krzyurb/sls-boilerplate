import BaseHandler from '../../core/BaseHandler';

export default class HelloWorldHandler extends BaseHandler {
  // eslint-disable-next-line no-unused-vars
  async process(event, context) {
    return this.response({
      body: { message: 'Hello world!' },
    });
  }
}
