//seed empty database here????
import Character from "../models/CharacterSchema.js";
import axios from "axios";

const fetchCharacter = async() =>{
   const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random")
   console.log(newCharacter)
   await Character.create(newCharacter.data)
}

fetchCharacter()


async function seedEmptyCharacters () {
    await Character.deleteMany({})
    await Character.create({})
}

// seedEmptyCharacters()

export default fetchCharacter