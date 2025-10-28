//importing express module
import express, { type Express, type Request, type Response } from "express";

const app: Express = express();



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
