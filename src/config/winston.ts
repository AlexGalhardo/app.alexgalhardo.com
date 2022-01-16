import winston from 'winston';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const level = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
    // winston.format.json()
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({ filename: `./src/logs/winston.log` }),
];

const Winston = winston.createLogger({
    level: level(),
    levels,
    exitOnError: false,
    format,
    transports,
});

export default Winston;
