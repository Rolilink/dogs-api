const winston = require('winston');

const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(
        (info) => `[${info.timestamp} ${info.level}]: ${info.message}`,
    ),
);


const logger = winston.createLogger({
    level: 'http',
    format: logFormat,
    transports: [
        new winston.transports.Console(),
    ],
});

module.exports = logger;
