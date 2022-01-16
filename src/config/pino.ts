import Pino from 'pino';

const PinoLog = new Pino({
    level: 'debug',
    prettyPrint: {
        levelFirst: true,
        colorize: true,
    },
});

export default PinoLog;
