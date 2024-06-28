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
    const puthagaVimarsanamData = JSON.parse(dbData)["puthagavimarsanam"];

    // Find the book with the matching ID
    const book = puthagaVimarsanamData.find((book) => book.id === id);

    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error reading or parsing db.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
