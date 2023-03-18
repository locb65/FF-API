import express from "express";
import rootpath from "rootpath";
import cors from "cors";
import jwt from "./helpers/jwt.js";
import errorHandler from "./helpers/error-handler.js";
import characterRouter from "./Router/characterRouter.js";
import userRouter from "./Router/userRouter.js";
 
const app = express()
app.use(express.json());
app.use(cors());
app.use(jwt());

app.use("/users", userRouter);
app.use("/characters", characterRouter);

app.use(errorHandler);



   
    // app.get("/character", async(req, res)=>{
    //     const newCharacter = await axios.get("https://www.moogleapi.com/api/v1/characters/random");
    //     return res.json(newCharacter.data);

    //  }
    // )

// app.get("/allCharacters", async(req, res)=>{
//  res.json(await Character.find());
//      }
// )

// app.get("/character/:id", async(req, res)=>{
//     const id = req.params.id;
//     const findCharacter = await Character.findById(id);
//     res.json(findCharacter);
// })

// app.get("/character/name/:name", async(req, res)=>{
//     const characterName = req.params.name;
//     const findCharacter = await Character.find({name: characterName});;
//     res.json(findCharacter);
// })
// app.post("/character", async(req, res)=>{
//     return res.json(await createCharacter());
//         }
//    )
   

// // app.post("/character", async(req, res)=>{
// //     const newCharacter = await Character.create(req.body);
    
// //     res.json(newCharacter);
// // })

// app.put("/character/:id", async(req, res)=>{
//     // const id = { _id: req.params.id};
//     const updateCharacter = await Character.findOneAndUpdate(
//         {_id: req.params.id},
//         // req.body,
//         {new: true}
//         );
//         res.json(updateCharacter);
// })
// app.post("/oneteam", async(req, res)=>{
//     return res.json(await createTeam());
// })

// app.post ("/twoteams", async(req, res)=>{
//     return res.json(await createTeams());
//         }
//    )
   
// app.get("/allUsers", async(req, res)=>{
//     return res.json(await Users.find())})

// app.get("/user/:id", async(req, res)=>{
//     const id = req.params.id;
//     const findUser = await Users.findById(id)
//     res.json(findUser);});

// app.post("/user", async(req, res)=>{
//     const newUser = await Users.create(req.body);
//     res.json(newUser)});

// app.put("/user/:id", async(req, res)=>{
//     const id = req.params.id;
//     const updateUser = await Users.findOneAndUpdate(
//         {_id: id},
//         // req.body,
//         {new: true}
//         )
//         res.json(updateUser)});

// app.delete("/user/:id", async(req, res)=>{
//     const id = req.params.id;
//     const deleteUser = await Users.findByIdAndDelete(id);
//     res.json(deleteUser);
// })

// app.put("/team/coinflip", async(req, res)=>{

// })


app.listen(3000)