import Pino from 'pino';

export default PinoLog = new Pino({
    level: 'debug',
    prettyPrint: {
        levelFirst: true,
        colorize: true,
    },
});
