import express from "express";
import {
  registerUser,
  login,
  logout,
  getCurrentUser,
} from "../controllers/authController";

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/login", login);
router.post("/logout", logout);
router.get("/reloadCredentials", getCurrentUser);

export default router;
