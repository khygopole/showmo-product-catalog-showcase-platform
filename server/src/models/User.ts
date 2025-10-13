import mongoose, { Document } from "mongoose";
import { z } from "zod";

export const ZSregisterSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.email({ error: "Invalid email address format" }),
  password: z.string().min(8, "Password must have at least 8 characters"),
});

export const ZSloginSchema = z.object({
  email: z.email({ error: "Invalied email address format" }),
  password: z.string(),
  role: z.string(),
});

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
  profilePic: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], required: true },
    profilePic: {
      default:
        "https://kqgedyu578nqbb4z.public.blob.vercel-storage.com/Default_ProfilePicture-ugBJRISPNKLDtUjGcksUDiZrHtK0rl.jpg",
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
