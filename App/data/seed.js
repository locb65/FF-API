//seed empty database here????
import Character from "../models/CharacterSchema.js";
import axios from "axios";

const initializeCharacter = (character) => {
   character = 0;
   return character
}
// teams schema

// const teamArr = [];

const fetchCharacter = async () =>{
   const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random");
   console.log(newCharacter.data);
   const findExisting = await Character.findOne({description: newCharacter.data.description});

   if(findExisting === null ){  
      newCharacter.data.totalMatches = 0;
      newCharacter.data.totalWins = 0;
      newCharacter.data.totalLosses = 0;
      return await Character.create(newCharacter.data);
   }  
return findExisting;
}

const fetchTeam = async() =>{
   
   const team = []
   let maxTeamNumber = 3
   //for loop to make 3 random characters into a team
   for (let i =0; i <= maxTeamNumber; i++){

         const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random")

         //need conditional to check if character exists in database
         console.log(newCharacter.data)

         const findExisting = await Character.findOne({description: newCharacter.data.description})

      //    console.log(Character.find({name: newCharacter.data.name}))

         if(findExisting === null ){
            // const initializeCharacter = initializeCharacter(newCharacter.data)
            newCharacter.data.totalMatches = 0;
            newCharacter.data.totalWins = 0;
            newCharacter.data.totalLosses = 0;

            team.push(await Character.create(newCharacter.data));
            // teamArr.push(team)
         }else {
            console.log(findExisting)
            //teamSchema.create(
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
   // const allCharacters = await axios.get("https://www.moogleapi.com/api/v1/characters/");
    await Character.deleteMany({})
//     await Character.create(allCharacters.data)
//     .then(characters => {
//         characters.forEach(character => {
//          Character.findOneAndUpdate({name: character.description}, :  + 1})
//          character.save()
//     })
// })
}
// seedEmptyCharacters()


// const coinflip = async() => {
//    // const teams = fetchTeams()
//    const randomWinner = Math.round(Math.random() * 1)
//    if (randomWinner === 0) {
//       console.log("teamOne wins")
//    }
//    else {
//       console.log("teamOne wins")
//    }
//    console.log(randomWinner)
// }

// coinflip()


export {fetchCharacter, fetchTeams}