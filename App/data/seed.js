//seed empty database here????
import Character from "../models/CharacterSchema.js";
import axios from "axios";


const fetchTeam = async() =>{
   
   const team = []
   let maxTeamNumber = 3
   //for loop to make 3 random characters into a team
   for (let i =0; i <= maxTeamNumber; i++){

         const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random")

         //need conditional to check if character exists in database
         console.log(newCharacter.data)

         const findExisting = await Character.findOne({name: newCharacter.data.description})

      //    console.log(Character.find({name: newCharacter.data.name}))

         if(findExisting === null ){

            team.push(await Character.create(newCharacter.data));

         }else {
            console.log(findExisting)

            team.push(findExisting)
         }
         //increment wins prototype code...../not working
   }  
   return team
}
// fetchCharacter()


const fetchTeams= async () => {
   const teamOne = await fetchTeam()
   const teamTwo = await fetchTeam()
   return {teamOne, teamTwo}
}

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


export default fetchTeams