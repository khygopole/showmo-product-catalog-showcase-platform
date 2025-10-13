import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDatabase } from "./utils/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", userRoutes);

const PORT = process.env.PORT || 3000;

connectDatabase(process.env.MONGO_URI!);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} ...`);
});
