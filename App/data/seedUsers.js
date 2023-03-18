import Users from "../models/UserSchema.js";
import mongoose from "../utils/connection.js";

const seedUsers = () => {
    Users.deleteMany({});
    Users.create({})
}

seedUsers();

export default seedUsers;