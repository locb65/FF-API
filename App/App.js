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

app.listen(3000)