const logger = require('./logger');

logger.log('info', 'test message %s', 'my string');
// logger.log('error', 'test message %s', 'my string');
logger.log({
  private: true,
  level: 'error',
  message: 'This is super secret - hide it.'
});
