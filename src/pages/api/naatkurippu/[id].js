// pages/api/naatkurippu/[id].js
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    const dbPath = path.join(process.cwd(), "_data/db.json");
    const dbData = await fs.readFile(dbPath, "utf-8");
    const naatkurippuData = JSON.parse(dbData)["naatkurippu"];

    // Find the book with the matching ID
    const naatkurippu = naatkurippuData.find(
      (naatkurippu) => naatkurippu.id === id
    );

    if (!naatkurippu) {
      res.status(404).json({ error: "Naatkurippu not found" });
      return;
    }

    res.status(200).json(naatkurippu);
  } catch (error) {
    console.error("Error reading or parsing db.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}