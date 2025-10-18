import type { Request, Response } from "express";
import { IMAGE_TYPES, MAX_IMAGE_SIZE, Product } from "../models/Product";
import { uploadToBlob } from "../utils/uploadToBlob";

export const addProduct = async (req: Request, res: Response) => {
  try {
    const file = req.file;

    if (file && !IMAGE_TYPES.includes(file.mimetype))
      return res
        .status(400)
        .json({ message: "File must be an image (JPEG, PNG, GIF" });

    if (file && file.size >= MAX_IMAGE_SIZE)
      return res
        .status(400)
        .json({ message: "File size must be less than 2MB" });

    let imageUrl: string | undefined;
    if (file) {
      imageUrl = await uploadToBlob(file);
    }

    const { name, description } = req.body;
    const price = Number(req.body.price);
    const stock = Number(req.body.stock);
    const favorites = Number(req.body.stock);

    const newProduct = await Product.create({
      name,
      price,
      stock,
      description,
      image: imageUrl,
      favorites,
      addedBy: req.user?.userId,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Adding Product Failed: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
