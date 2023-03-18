import expressjwt from 'express-jwt';

import config from './config';

const jwt = () => {
    const { secret } = config;
    return expressjwt({ secret, algorithms: ['HS256'] }).unless({
        path: ['/users/authenticate']
    });
}

export default jwt;