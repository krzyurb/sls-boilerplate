import HelloWorldHandler from './handler';

export default (event, context) => {
  const handler = new HelloWorldHandler();
  return handler.execute(event, context);
};
