//importing express module
import express from "express";
import {
  createProduct,
  createProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/user.ts";
import { PrismaClient } from "@prisma/client";

//initialize express app
const app = express();
//initialize prisma client
const client = new PrismaClient();

//middleware to parse json request bodies
app.use(express.json());

//define route handlers
app.get("/products", getProducts);
app.post("/products/bulk", createProducts);
app.post("/products", createProduct);
app.post("/products/:id", getProduct);
app.patch("/products/:id", updateProduct);
app.delete("/products/:id", deleteProduct);

//define a route handler for the listening root URL
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
