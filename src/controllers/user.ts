import { type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const getProducts = async (_req: Request, res: Response) => {
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

export const createProduct = async (req: Request, res: Response) => {
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
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await client.product.findFirst({
            where: {
                id: String(id),
                isDeleted: false
            }
        });
        if (!product){
            res.status(404).json({ message: "Product not found"});
        } else {
            res.status(200).json(product);
        }
    } catch (e) {
        res.status(500).json({ message: "Something went wrong try again later"})
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { productName, productDescription, unitsLeft } = req.body;

        const updatedProduct = await client.product.update({
            where: {
                id: String(id)
            },
            data: {
                productName: productName && productName,
                productDescription: productDescription && productDescription,
                unitsLeft: unitsLeft && unitsLeft
            }
            }
        );
        res.status(200).json(updatedProduct);
    } catch (e) {
        res.status(500).json({ message: "Something went wrong try again later"});
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedProduct = await client.product.delete({
            where: {
                id: String(id)
            } 
        });
        res.status(200).json(deletedProduct);
    } catch (e) {
        res.status(500).json({ message: "Something went wrong try again later"});
    }
};
    

