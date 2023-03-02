import express from "express";
import Controller from "../Controller/methodController";

const loggers = express.Router()

const app = express()
app.use(express.json())

loggers.get("/find", Controller.find)
loggers.post("/post", Controller.post)


export default loggers