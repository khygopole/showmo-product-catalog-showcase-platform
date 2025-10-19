import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ZSregisterSchema, ZSloginSchema } from "../models/User";
import { User } from "../models/User";

export const login = async (req: Request, res: Response) => {
  try {
    const result = ZSloginSchema.safeParse(req.body);

    if (!result.success) return res.status(400).json(result.error);

    const { email, password, role } = req.body;

    const userExists = await User.findOne({ email, role });
    if (!userExists)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, userExists.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const payload = {
      userId: userExists._id,
      role: userExists.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });

    res.status(200).json({
      id: userExists._id,
      firstName: userExists.firstName,
      lastName: userExists.lastName,
      email: userExists.email,
      profilePic: userExists.profilePic,
      role: userExists.role,
    });
  } catch (error) {
    console.error("Login error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const result = ZSregisterSchema.safeParse(req.body);

    if (!result.success) return res.status(400).json(result.error);

    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAccount = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "user",
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.send({ message: "Successfully Logged Out" });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
      userId: string;
      role: string;
    };
    const userExists = await User.findById(decoded.userId).select("-password");

    if (!userExists)
      return res.status(404).json({ message: "User does not exist" });

    res.json(userExists);
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
