import { z } from "zod";

export const ZregisterSchema = z
  .object({
    firstName: z.string().trim().min(1, "Name must not be empty"),
    lastName: z.string().trim().min(1, "Name must not be empty"),
    email: z.email({ error: "Invalid email address format" }),
    password: z.string().min(8, "Password must have at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((value) => value.password === value.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const ZloginSchema = z.object({
  email: z.email({ error: "Invalid email address format" }),
  password: z.string(),
});

export interface TloginDataType {
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface TloginResponseType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  profilePic: string;
}

export interface TauthUserType {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  role: string | null;
  profilePic: string | null;
}

export interface TauthState {
  user: TauthUserType | null;
  isAuthenticated: boolean;
}

export type TregisterType = z.infer<typeof ZregisterSchema>;
export type TloginType = z.infer<typeof ZloginSchema>;
