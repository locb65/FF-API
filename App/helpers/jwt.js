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

const isRevoked = async (req, token) => {
    const user = await userAuthenicate.getUser(token.payload.sub);

    if(!user) {
        return true;
    }
}
export default jwt;