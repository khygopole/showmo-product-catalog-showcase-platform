import mongoose, { Document } from "mongoose";
import { z } from "zod";

export const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
export const IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

export const ZSproductSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  price: z.number().gt(0, { error: "Price must be greater than 0" }),
  stock: z.number().gte(0, { error: "Invalid stock number" }),
  description: z.string().trim().min(1, "Description is required"),
  image: z.string().trim().min(1, "No image found"),
  favorites: z.number().gte(0, { error: "Error in favorites" }),
  addedBy: z.string().trim().min(1, "User does not exist"),
});

export interface IProduct extends Document {
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  favorites: number;
  addedBy: string;
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    favorites: { type: Number, required: true },
    addedBy: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;

        delete ret._id;
        delete (ret as any).__v;
        delete (ret as any).updatedAt;
      },
    },
  }
);

export const Product = mongoose.model("Product", ProductSchema);
