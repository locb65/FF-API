import CharacterSchema from "./CharacterSchema.js";
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    teamMember1: [CharacterSchema],
    teamMember2: [CharacterSchema],
    teamMember3: [CharacterSchema],
})

export default mongoose.model("Team", teamSchema);