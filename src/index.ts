//importing express module
import express from "express";
import { createUser, getUsers } from "./controllers/user.ts";
import { PrismaClient } from "@prisma/client";

//initialize express app
const app = express();
//initialize prisma client
const client = new PrismaClient();

app.use(express.json());

app.get("/users", getUsers);
app.post("/users", createUser);

//define a route handler for the listening root URL
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
