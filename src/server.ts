import express from "express";

const app = express();

app.get('/', (req, res)=> res.send({nome: 'lucas', idade: 5}));

app.listen(3000, ()=> console.log('server is running'));
