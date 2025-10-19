import type { EntityState } from "@reduxjs/toolkit";
import { z } from "zod";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
export const IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

const fileExtract = (
  value: FileList | File | null | undefined
): File | undefined => {
  if (value instanceof File) return value;
  if (value instanceof FileList && value.length > 0) return value[0];
  return undefined;
};

export const ZproductSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0;
      },
      { error: "Price must be greater than 0" }
    ),
  stock: z
    .string()
    .min(1, "Stock is required")
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num >= 0;
      },
      { error: "Invalid stock number" }
    ),
  description: z.string().trim().min(1, "Description is required"),
  image: z
    .union([z.instanceof(FileList), z.instanceof(File), z.undefined()])
    .refine((value) => fileExtract(value) !== undefined, {
      error: "Image file is required",
    })
    .refine(
      (value) => {
        const file = fileExtract(value);
        return file ? IMAGE_TYPES.includes(file.type) : false;
      },
      { error: "Must be valid image format (JPEG, PNG, GIF)" }
    )
    .refine(
      (value) => {
        const file = fileExtract(value);
        return file ? file.size <= MAX_IMAGE_SIZE : false;
      },
      { error: "File size must be less than 2MB" }
    ),
});

export type TproductForm = z.infer<typeof ZproductSchema>;

export type Tproduct = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  favorites: number;
  addedBy: string;
  createdAt: Date;
};

export type TnormalizedProduct = EntityState<Tproduct, string>;
