//importing express module
import express from "express";
import {}
import { PrismaClient } from "@prisma/client";

//initialize express app
const app = express();
//initialize prisma client
const client = new PrismaClient();


//define a route handler for the listening root URL
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
