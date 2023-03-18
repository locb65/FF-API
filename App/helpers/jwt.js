import expressjwt from 'express-jwt';
import config from './config.json';
import userAuthenicate from '../userAuthenicate/userAuthenicate.js';

const jwt = () => {
    const { secret } = config.secret;
    return expressjwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            '/users/authenticate',
            '/users/register'
        ]
    });
}

const isRevoked = async (req, payload, done) => {
    const user = await userAuthenicate.findById(payload.sub);

    if(!user) {
        return done(null, true);
    }
    done();
}
export default jwt;