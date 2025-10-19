import express from "express";
import { addProduct, getProducts } from "../controllers/productController";
import { verifyToken, verifyRole } from "../middleware/authMiddleware";
import { upload } from "../config/multerConfig";

const router = express.Router();

router.post(
  "/addProduct",
  verifyToken,
  verifyRole(["admin"]),
  upload.single("image"),
  addProduct
);

router.get(
  "/getProducts",
  verifyToken,
  verifyRole(["admin", "user"]),
  getProducts
);

export default router;
