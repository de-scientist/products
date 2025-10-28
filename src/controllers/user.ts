import { type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await client.product.findMany({
            where: {
                isDeleted: false
            }
        });
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({ message: "Something went wrong try again later"});
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { productName, productDescription, unitsLeft} = req.body;

        const newProduct = await client.product.create({
            data: {
                productName,
                productDescription,
                unitsLeft
            }
        });
        res.status(201).json(newProduct);
    } catch (e) {
        res.status(500).json({ message: "Something went wrong try again later"})
    }
}