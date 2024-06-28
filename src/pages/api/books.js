// pages/api/books.js
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const dbPath = path.join(process.cwd(), "_data/db.json");
    const dbData = await fs.readFile(dbPath, "utf-8");
    const puthagaVimarsanamData = JSON.parse(dbData)["puthagavimarsanam"];

    res.status(200).json(puthagaVimarsanamData);
  } catch (error) {
    console.error("Error reading or parsing db.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
