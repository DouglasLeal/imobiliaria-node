import * as dotenv from 'dotenv';
dotenv.config()
import express from "express";

let app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
})