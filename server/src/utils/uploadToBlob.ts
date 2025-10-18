import { put } from "@vercel/blob";

export const uploadToBlob = async (
  file: Express.Multer.File,
  customName?: string
): Promise<string> => {
  if (!file) throw new Error("No file provided for upload");

  try {
    const blob = await put(customName || file.originalname, file.buffer, {
      access: "public",
    });

    return blob.url;
  } catch (error) {
    console.error("Error uploading to Vercel Blob: ", error);
    throw new Error("Image upload failed");
  }
};
