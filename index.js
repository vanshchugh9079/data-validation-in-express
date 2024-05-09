import express from "express";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
let app = express()
dotenv.config()
app.use(express.json())
let { PORT } = process.env;
app.post("/", body("name").isAlpha(), (req, res) => {
    let result = validationResult(req)
    if (result.isEmpty()) {
        console.log(result);

        res.status(200).json({ message: "success" })
    }
    else {
        res.status(400).json({ message: result.errors[0].msg })
    }

})
app.listen(PORT)