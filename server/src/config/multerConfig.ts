import multer from "multer";
const assets = multer.memoryStorage();
export const upload = multer({ storage: assets });
