import express from 'express';
import userAuthenticate from './userAuthenticate.js';

const router = express.Router();

router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAllUsers)
router.get('/current', getCurrentUser)
router.get('/:id', getUserById)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

const authenticate = async (req, res, next) => {
    userAuthenticate.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

const register = async (req, res, next) => {
    userAuthenticate.createUser(req.body)
        .then(() =>res.json({}))
        .catch(err => next(err));
}

const getAllUsers = async (req, res, next) => {
    userAuthenticate.getAllUsers()
        .then(users => res.json(users))
        .catch(err => next(err));
}

const getCurrentUser = async (req, res, next) => {
    userAuthenticate.getCurrentUser()
        .then(user => res.json(user))
        .catch(err => next(err));

}

const getUserById = async (req, res, next) => {
    userAuthenticate.getUserById(req.params.id)
        .then(user => res.json(user))
        .catch(err => next(err));
}

const updateUser = async (req, res, next) => {
    userAuthenticate.updateUser(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
 }

const deleteUser = async (req, res, next) => {
    userAuthenticate.deleteUser(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}



export default router;