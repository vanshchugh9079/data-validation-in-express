import express from "express";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
let app = express()
dotenv.config()
app.use(express.json())
let { PORT } = process.env;
// app.post("/", body("name").isAlpha(), (req, res) => {
//     let result = validationResult(req)
//     if (result.isEmpty()) {
//         console.log(result);
//         res.status(200).json({ message: "success" })
//     }
//     else {
//         res.status(400).json({ message: result.errors[0].msg })
//     }
// })
//  custom messege validation
app.post("/", body("password")
    .isLength({ min: 6 })
    .withMessage("password should me mininmum 6 chracter")
    .matches(/\d/)
    .withMessage("paswoord contain must one digit"),
    (req, res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
            res.json({
                message: "your acccount is successfully registered"
            })
        }
        else{
            res.status(400).json({
                message: errors.errors[0].msg
            })
        }
    })
app.listen(PORT)
