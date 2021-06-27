import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { catchError } from "./middlewares/catchError"; 

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use(catchError);

app.listen(3000, ()=> console.log('server is running'));
