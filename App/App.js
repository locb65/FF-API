import express from "express";
import fetchCharacter from "./data/seed.js";
import axios from "axios";

const app = express()
app.use(express.json());

   
    app.get("/", async(req, res)=>{
        const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random");
        return res.json(newCharacter.data);

     }
    )

// app.get("/", async(req, res)=>{
//         fetchCharacter()
//         const newCharacter = fetchCharacter()
//         res.json(fetchCharacter())
//      }
     
// )
// app.get("/Teams", async (req, res)=>{
//     const Team1 = aysnc (() => {
//         await fetch("https://www.moogleapi.com/api/v1/characters/random")
//     })
//     const Team2 = aysnc (() => {
//         await fetch("https://www.moogleapi.com/api/v1/characters/random")
//     })
// })

app.post((req, res)=>
{
    //iterate teams
})

app.listen(3000)