import CharacterSchema from "./CharacterSchema.js";
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    teamMember: {type: [CharacterSchema.schema], required: true},
    teamMember: {type: [CharacterSchema.schema], required: true},
    teamMember: {type: [CharacterSchema.schema], required: true},
})

export default mongoose.model("Teams", teamSchema);