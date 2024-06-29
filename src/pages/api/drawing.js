import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const dbPath = path.join(process.cwd(), "_data/db.json");
    const dbData = await fs.readFile(dbPath, "utf-8");
    const oviyamData = JSON.parse(dbData)["oviyam"];

    const dirPath = path.join(process.cwd(), "public/assets/drawings/");

    const responseData = await Promise.all(
      oviyamData.map(async (item) => {
        const filePath = path.join(dirPath, `d${item.id}.jpg`);
        const imageBuffer = await fs.readFile(filePath);
        const base64Image = imageBuffer.toString("base64");
        return {
          ...item,
          drawing: base64Image,
        };
      })
    );

    res.status(200).json({ drawings: responseData });
  } catch (error) {
    console.error("Error reading or processing files:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
