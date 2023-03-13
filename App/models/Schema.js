import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    origin: String,
    numberOfMatches: Number, 
    Wins: Number,
    // UniqueString:String
})

export default mongoose.model("Character", characterSchema)


//fetch request populates json data according to schema