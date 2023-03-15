//seed empty database here????
import Character from "../models/CharacterSchema.js";
import axios from "axios";



const fetchCharacter = async() =>{
   
   const team = []
   let maxTeamNumber = 3
   //for loop to make 3 random characters into a team
   for (let i =0; i <= maxTeamNumber; i++){

         const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random")

         const createCharacter = Character.create(newCharacter.data);

         //need conditional to check if character exists in database
         console.log(newCharacter.data)

         const findExisting = await Character.findOne({name: newCharacter.data.description})

      //    console.log(Character.find({name: newCharacter.data.name}))

         if(findExisting === null ){

            return createCharacter;
            // createCharacter
            // team.push(createCharacter)
            // console.log(team)
            // return team
         }
         //increment wins prototype code...../not working
      return await Character.findOneAndUpdate(newCharacter.data, {numberOfMatches:  + 1});
   }
   
}
// fetchCharacter()


const seedEmptyCharacters = async () =>{
   const allCharacters = await axios.get("https://www.moogleapi.com/api/v1/characters/");
    await Character.deleteMany({})
    await Character.create(allCharacters.data)
    .then(characters => {
        characters.forEach(character => {
         Character.findOneAndUpdate({name: character.description}, {numberOfMatches:  + 1})
         character.save()
    })
})
}
seedEmptyCharacters()


export default fetchCharacter