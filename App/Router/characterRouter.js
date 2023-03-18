import express from "express";
import Character from "../controllers/characterController.js"


const characterRouter  = express.Router();

// characterRouter.get("/", getAllCharacters);

// const getAllCharacters = async (req, res, next) => {
//     Character.getAllCharacters(req.body)
//         .then(characters => res.json(characters))
//         .catch(err => next(err));
//     }

const getCharacterById = async (req, res, next) => {
   const character = await Character.getCharacterById(req.params.id)
   res.json(character)

}

const getOneTeam = async (req, res, next) => {
    Character.createTeam(req.body)
    .then(team => res.json(team))
    .catch(err => next(err));
}

const getTwoTeams = async (req, res, next) => {
    Character.createTeams(req.body)
   .then(teams => res.json(teams))
   .catch(err => next(err));
}

const createCharacter = async (req, res, next) => {
    Character.createCharacter(req.body)
      .then(character => res.json(character))
      .catch(err => next(err));
}

const updateCharacter = async (req, res, next) => {
    Character.updateCharacter(req.params.id, req.body)
      .then(()=> res.json())
      .catch(err => next(err));
}


const deleteCharacter = async (req, res, next) => {
    Character.deleteCharacter(req.params.id)
     .then(() => res.json())
     .catch(err => next(err));
}

characterRouter.get("/:id", getCharacterById);
characterRouter.post("/one-team", getOneTeam);
characterRouter.post("/two-teams", getTwoTeams);
characterRouter.post("/", createCharacter);
characterRouter.put("/:id", updateCharacter);
characterRouter.delete("/:id", deleteCharacter);


export default characterRouter;

// app.use(express.json());

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
   

// app.put("/character/:id", async(req, res)=>{
//     const updateCharacter = await Character.findOneAndUpdate(
//         {_id: req.params.id},
//         req.body,
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
   
