import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

interface TdecodedToken {
  userId: string;
  role: string;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Not Authenticated" });

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY!
    ) as TdecodedToken;
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

export const verifyRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Not Authenticated" });

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY!
      ) as TdecodedToken;

      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Access denied" });
      }

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }
  };
};
