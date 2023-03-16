import express from "express";
import  { fetchTeams, fetchCharacter } from "./data/seed.js";
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

app.get("/team", async(req, res)=>{
    return res.json(await fetchTeams());
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
app.get("/character", async(req, res)=>{
    return res.json(await fetchCharacter());
        }
   )
   

app.post("/character", async(req, res)=>{
    const newCharacter = await Character.create(req.body);
    res.json(newCharacter);
})

app.put("/character/:id", async(req, res)=>{
    // const id = { _id: req.params.id};
    const updateCharacter = await Character.findOneAndUpdate(
        {_id: req.params.id},
        // req.body,
        {new: true}
        );
        res.json(updateCharacter);
})

// app.put("/team/coinflip", async(req, res)=>{

// })


app.listen(3000)