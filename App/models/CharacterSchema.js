//schema model for fetch random character model

import mongoose from "../utils/connection.js";

const characterSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    race: String,
    job: String,
    height: String,
    weight: String,
    origin: String,
    description: String,
    // UniqueString:String  
    numberOfMatches: Number, 
    Wins: Number,
    // UniqueString:String
})

export default mongoose.model("Character", characterSchema)


