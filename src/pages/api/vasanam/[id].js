// pages/api/books/[id].js
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    const dbPath = path.join(process.cwd(), "_data/db.json");
    const dbData = await fs.readFile(dbPath, "utf-8");
    const vasanamData = JSON.parse(dbData)["vasanam"];

    // Find the book with the matching ID
    const vasanam = vasanamData.find((vasanam) => vasanam.id === id);

    if (!vasanam) {
      res.status(404).json({ error: "Vasanam not found" });
      return;
    }

    res.status(200).json(vasanam);
  } catch (error) {
    console.error("Error reading or parsing db.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
