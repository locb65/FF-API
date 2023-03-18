import express from "express";
import Character from "../controllers/characterController.js"


const characterRouter  = express.Router();


const getAllCharacters = async (req, res, next) => {
    Character.getAllCharacters(req.body)
        .then(characters => res.json(characters))
        .catch(err => next(err));
    }

const getCharacter = async (req, res, next) => {
   Character.getCharacterById(req.params.id, req.body)
   .then(character => res.json(character))
   .catch(err => next(err));

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


characterRouter.get("/", getAllCharacters);
characterRouter.get("/:id", getCharacter);
characterRouter.post("/one-team", getOneTeam);
characterRouter.post("/two-teams", getTwoTeams);
characterRouter.post("/", createCharacter);
characterRouter.put("/:id", updateCharacter);
characterRouter.delete("/:id", deleteCharacter);


export default characterRouter;

