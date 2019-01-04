export default class BaseHandler {
  constructor() {
    this.handlerName = this.constructor.name;
  }

  async execute(event, context) {
    return this.process(event, context);
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  async process(event, context) {
    throw new Error('This method needs to be implemented');
  }
}
