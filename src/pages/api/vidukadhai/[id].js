// pages/api/vidukadhai/[id].js
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    const dbPath = path.join(process.cwd(), "_data/db.json");
    const dbData = await fs.readFile(dbPath, "utf-8");
    const vidukadhaiData = JSON.parse(dbData)["vidukadhai"];

    // Find the book with the matching ID
    const vidukadhai = vidukadhaiData.find(
      (vidukadhai) => vidukadhai.id === id
    );

    if (!vidukadhai) {
      res.status(404).json({ error: "Vidukadhai not found" });
      return;
    }

    res.status(200).json(vidukadhai);
  } catch (error) {
    console.error("Error reading or parsing db.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
