//schema model for fetch random character model

import mongoose from "../utils/connection.js";
// const matchesSchema = new mongoose.Schema({
//     total: Number,
//     win
// })

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
    totalMatches: Number,
    totalWins: Number,
    totalLosses:Number,
    stats: [],
    // UniqueString:String
})

export default mongoose.model("Character", characterSchema)


