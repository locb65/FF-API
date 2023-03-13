//seed empty database here????

import mongoose from "../utils/connection";
import Character from "../models/CharacterSchema";

async function seedEmptyCharacters () {
    await Character.deleteMany({})
    await Character.create({})
}