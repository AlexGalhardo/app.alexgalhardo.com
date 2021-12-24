import morgan from 'morgan';

import Logger from './winston';

// eslint-disable-next-line no-multi-assign
const stream = (morgan.StreamOptions = {
    write: (message: unknown) => Logger.http(message),
});

const morganMiddleware = morgan(':method :url :status  :response-time ms', {
    stream,
});

export default morganMiddleware;
