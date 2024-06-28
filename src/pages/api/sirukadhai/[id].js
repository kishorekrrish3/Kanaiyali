// pages/api/sirukadhai/[id].js
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    const dbPath = path.join(process.cwd(), "_data/db.json");
    const dbData = await fs.readFile(dbPath, "utf-8");
    const sirukadhaiData = JSON.parse(dbData)["sirukadhai"];

    // Find the book with the matching ID
    const sirukadhai = sirukadhaiData.find(
      (sirukadhai) => sirukadhai.id === id
    );

    if (!sirukadhai) {
      res.status(404).json({ error: "Sirukadhai not found" });
      return;
    }

    res.status(200).json(sirukadhai);
  } catch (error) {
    console.error("Error reading or parsing db.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
