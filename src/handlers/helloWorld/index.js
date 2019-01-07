import HelloWorldHandler from './handler';
import RandomNumberService from './RandomNumberService';

export default (event, context) => {
  const handler = new HelloWorldHandler({
    randomNumberService: new RandomNumberService(),
  });

  return handler.execute(event, context);
};
