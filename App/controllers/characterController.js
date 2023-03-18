import Character from "../models/CharacterSchema.js";
import axios from "axios";

const createCharacter = async () =>{
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
 
 const createTeam = async() =>{
    const team = []
    let maxTeamNumber = 3
    for (let i =0; i <= maxTeamNumber; i++){
          const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random")
          console.log(newCharacter.data)
          const findExisting = await Character.findOne({description: newCharacter.data.description})
          if(findExisting === null ){
             newCharacter.data.totalMatches = 0;
             newCharacter.data.totalWins = 0;
             newCharacter.data.totalLosses = 0;
             
             team.push(await Character.create(newCharacter.data));

          }else {
             console.log(findExisting)
             team.push(findExisting)
          }
    } 
    return team
    console.log(team) 
 }


 const createTeams= async () => {
    const teamOne = await createTeam()
    const teamTwo = await createTeam()
    return {teamOne, teamTwo}
 }

 const getAllCharacters = async () => {
    return await Character.find()
 }

 const getCharacterById = async (id) => {
    return await Character.findById(id)
 }

 const updateCharacter = async (id, updatedCharacter) => {
    return await Character.findByIdAndUpdate(id, updatedCharacter, {new: true})
 }
 const deleteCharacter = async (id) => {
    return await Character.findByIdAndDelete(id)
 }


 export default{ createCharacter, createTeam, createTeams, getAllCharacters, getCharacterById, updateCharacter, deleteCharacter }