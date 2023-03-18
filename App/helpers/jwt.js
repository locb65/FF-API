import { expressjwt } from 'express-jwt';
import config from '../config.json' assert { type: 'json' };
import userAuthenicate from '../controllers/userAuthenticateController.js';

const jwt = () => {
    const  secret  = config.secret;
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