import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const dbPath = path.join(process.cwd(), "_data/db.json");
  const dbData = await fs.readFile(dbPath, "utf-8");
  const vasanamData = JSON.parse(dbData).vasanam;

  const dirPath = path.join(process.cwd(), "public/assets/people/");
  const files = await fs.readdir(dirPath);

  const responseData = vasanamData.map((item) => {
    const name = item.name;
    const file = files.find((f) => f.includes(name));
    const imagePath = file ? path.join("/assets/people/", file) : null;
    return {
      ...item,
      nameImgSrc: imagePath,
    };
  });

  res.status(200).json({ vasanam: responseData });
}
