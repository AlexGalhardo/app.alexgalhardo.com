import morgan from 'morgan';

import Logger from './winston';

const stream = (morgan.StreamOptions = {
    write: (message) => Logger.http(message),
});

const morganMiddleware = morgan(':method :url :status  :response-time ms', {
    stream,
});

export default morganMiddleware;
