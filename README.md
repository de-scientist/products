# **TypeScript, Express, Prisma, SQL Server Setup**

This guide walks you through setting up a simple Express and TypeScript development environment from scratch.



### **TypeScript with Express**

In this first part, let's set up TypeScript with Express



1. Start by creating the package.json file:

**npm init -y**



2\. Install typescript and nodemon and ts-node as development dependencies, ts-node is a package that allows us to execute typescript without having to compile it to JavaScript first

**npm i nodemon typescript ts-node -D**



3\. Initialize typescript config:

**npx tsc --init**



4\. Install Express

**npm i express**



5\.  Install express types as a development dependency:

**npm i @types/express -D**



6\. Add the following script in your package.json under scripts (assuming your entry point is a file called index.ts and is inside the src folder):

**"scripts": {**

&nbsp;   \*\*"start:dev": "nodemon src/index.ts"\*\*


**},**



Here is our first express code in TypeScript



**//src/index.ts**

**import express, { type Express, type Request, type Response } from "express";**



**const app: Express = express();**



**app.get("/", (\_req: Request, res: Response) => {**

**res.send("Welcome to Express + TS");**

**});**



**const PORT = 3000;**

**app.listen(PORT, () => {**

**console.log(`App running on port ${PORT}`);**

**});**



### **Adding Prisma**

**Now let's add prisma to our set up.**



* Start by installing the prisma CLI as a dev dependency.

**npm i prisma -D**



* Initialize prisma in your project with sqlserver as the database:

**npx prisma init --datasource-provider sqlserver**



* Install **dotenv**, and add **import "dotenv/config";** to your **prisma.config.ts** file to load environment variables from **.env**.

**npm i dotenv**



Inside **prisma.config.ts**, add the line: **import "dotenv/config";**



* Create your models in prisma/schema.prisma, example:

**//define the Product model**

**model Product {**

  **id                 String   @id @default(uuid()) @map("productID")**

  **productName        String   @map("productName")**

  **productDescription String   @map("productDescription")**

  **unitsLeft          Int      @map("unitsLeft")**

  **isDeleted          Boolean  @default(false) @map("isDeleted")**

  **createdAt          DateTime @default(now()) @map("createdAt")**

  **updatedAt          DateTime @updatedAt @map("updatedAt")**



  **@@map("Products\_Table")**

**}**Before running migrations, update the generate part of your schema.prisma from:



**generator client {**

**provider = "prisma-client"**

**output   = "../src/generated/prisma"**

**}**

to:



**generator client {**

**provider = "prisma-client-js"**

**}**



* Update **DATABASE\_URL** in **.env** with the correct details and run migrations;
* 

**npx prisma migrate dev --name initial\_migration**



* Install prisma client package

**npm i @prisma/client**



* At one point, you might need to add the following two lines in **tsconfig.json** under **compilerOptions** when you get the error An import path can only end with a '**.ts**' extension when **allowImportingTsExtensions' is enabled**.



**"allowImportingTsExtensions": true,**

**"noEmit": true**

