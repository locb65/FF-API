import mongoos from "mongoose";

const Schema = mongoos.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
})

export default mongoos.model("User", userSchema);