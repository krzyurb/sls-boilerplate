import winston from 'winston';

export default () => {
  const logger = winston.createLogger();

  if (process.env.NODE_ENV !== 'test') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

  return logger;
};
