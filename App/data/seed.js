//seed empty database here????
import Character from "../models/CharacterSchema.js";
import axios from "axios";



const fetchCharacter = async() =>{
   const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random")
   //need conditional to check if character exists in database
   console.log(newCharacter.data)
   const findExisting = await Character.findOne({name: newCharacter.data.name})
//    console.log(Character.find({name: newCharacter.data.name}))
   if(findExisting === null ){

   return await Character.create(newCharacter.data);
} else {
    return findExisting;
   }
}

// fetchCharacter()



async function seedEmptyCharacters () {
    await Character.deleteMany({})
    // await Character.create({})
}

seedEmptyCharacters()


export default fetchCharacter