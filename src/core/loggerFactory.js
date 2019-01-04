import winston from 'winston';

export default () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  });

  if (process.env.NODE_ENV === 'test') {
    logger.silent = true;
  }

  return logger;
};
