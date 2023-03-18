import config from '../config.json' assert { type: 'json' };
import jwt from 'jsonwebtoken';
import Users from '../models/UserSchema.js';
import bcrypt from 'bcryptjs';


const authenticate = async ({ username, password }) => {
    const user = await Users.findOne({username});
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({ sub: user._id }, config.secret, { expiresIn: '10d' });
    return{
        ...user.toJSON(),
        token
        };
    }
}

const getAllUsers = async () => {
    return Users.find({});
}

const getUser = async(id) =>{
    return Users.findById(id);
}

const createUser = async(userParam) =>{
    if (await Users.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }
    const user = new Users(userParam);
    if(userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }
   return await user.save();
}

const updateUser = async(id, userParam) =>{
    const user = await findById(id);
    if (!user) throw 'User not found';
    if (user.username!== userParam.username && await Users.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    if(userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }
    Object.assign(user, userParam);
    return await user.save();
}

const deleteUser = async(id) =>{
    await Users.findByIdAndDelete(id);
}

export default { authenticate, getAllUsers, getUser, createUser, updateUser, deleteUser }