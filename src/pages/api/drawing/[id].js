import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    const dbPath = path.join(process.cwd(), "_data/db.json");
    const dbData = await fs.readFile(dbPath, "utf-8");
    const oviyamData = JSON.parse(dbData)["oviyam"];

    // Find the drawing with the matching ID
    const drawing = oviyamData.find((drawing) => drawing.id === id);

    if (!drawing) {
      res.status(404).json({ error: "Drawing not found" });
      return;
    }

    const dirPath = path.join(process.cwd(), "public/assets/drawings/");
    const filePath = path.join(dirPath, `d${drawing.id}.jpg`);
    const imageBuffer = await fs.readFile(filePath);
    const base64Image = imageBuffer.toString("base64");

    const responseData = {
      ...drawing,
      drawing: base64Image,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error reading or processing files:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
