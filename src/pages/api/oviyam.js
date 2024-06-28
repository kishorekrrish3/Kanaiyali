import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const dbPath = path.join(process.cwd(), "db.json");
    const dbData = await fs.readFile(dbPath, "utf-8");
    const oviyamData = JSON.parse(dbData)["oviyam"];

    res.status(200).json(oviyamData);
  } catch (error) {
    console.error("Error reading or parsing db.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
