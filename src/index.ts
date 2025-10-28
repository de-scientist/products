//importing express module
import express from "express";
import { createProduct, getProducts, getProduct } from "./controllers/user.ts";
import { PrismaClient } from "@prisma/client";

//initialize express app
const app = express();
//initialize prisma client
const client = new PrismaClient();

app.use(express.json());

app.get("/products", getProducts);
app.post("/products", createProduct);
app.post("/products/:id", getProduct)

//define a route handler for the listening root URL
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
