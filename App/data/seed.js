//seed empty database here????


import Character from "../models/CharacterSchema.js";

async function seedEmptyCharacters () {
    await Character.deleteMany({})
    await Character.create({})
}