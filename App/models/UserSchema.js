import mongoose from "../utils/connection.js";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
        },
    lastName: {
        type: String,
        required: true
        },
        createdDate: {
            type: Date,
            default: Date.now
        }
});

userSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
    }
});

export default mongoose.model("Users", userSchema);