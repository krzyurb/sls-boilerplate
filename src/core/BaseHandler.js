import loggerFactory from './loggerFactory';

export default class BaseHandler {
  constructor(dependencies) {
    this.handlerName = this.constructor.name;
    this.logger = loggerFactory();

    this.injectDependencies(dependencies);
  }

  injectDependencies(dependencies) {
    if (dependencies) {
      Object.assign(this, dependencies);
    }
  }

  async execute(event, context) {
    this.logger.info(`Executed ${this.handlerName} handler`);

    return this.process(event, context);
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  async process(event, context) {
    throw new Error('This method needs to be implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  response(response) {
    return {
      statusCode: response.status || 200,
      headers: response.headers || { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(response.body),
    };
  }
}
