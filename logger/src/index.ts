import express from "express";
import { Logger } from "./Controller/Logger";
import loggers from "./router/routes";

const app = express()
app.use(Logger)
app.use(express.json())

app.use(loggers)

app.listen(8000, () => {
    console.log("Server in running in port 8000");
})