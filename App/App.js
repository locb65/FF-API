import express from "express";
import fetchCharacter from "./data/seed.js";
import axios from "axios";
import Character from "./models/CharacterSchema.js"

const app = express()
app.use(express.json());

   
    // app.get("/character", async(req, res)=>{
    //     const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random");
    //     return res.json(newCharacter.data);

    //  }
    // )

app.get("/character", async(req, res)=>{
 return res.json(await fetchCharacter());
     }
)

app.get("/character/:id", async(req, res)=>{
    const id = req.params.id;
    const findCharacter = await Character.findById(id);
    res.json(findCharacter);
})

app.get("/character/name/:name", async(req, res)=>{
    const characterName = req.params.name;
    const findCharacter = await Character.find({name: characterName});;
    res.json(findCharacter);
})

app.post("/character", async(req, res)=>{
    const newCharacter = await Character.create(req.body);
    res.json(newCharacter);
})

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