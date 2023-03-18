//seed empty database here????
import Character from "../models/CharacterSchema.js";
import axios from "axios";
import Teams from "../models/TeamSchema.js";


const seedEmptyCharacters = async () =>{

      await Character.deleteMany()

      await Character.create({})

}
