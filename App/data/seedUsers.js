import Users from "../models/UserSchema.js";

const seedUsers = () => {
    Users.deleteMany({});
    Users.create({})
}

seedUsers();

export default seedUsers;