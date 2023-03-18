import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
})

export default mongoose.model("Users", userSchema);