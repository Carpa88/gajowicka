import fs from "fs";
import path from "path";
import { ActivityType } from "../types";

const filePath = path.resolve("app", "src", "wiadomosci.md");

export function parseMarkdown(): ActivityType[] {
  const raw = fs.readFileSync(filePath, "utf8");

  const blocks = raw.split(/^###\s+/m).filter(Boolean);

  return blocks.map((block) => {
    const lines = block.trim().split("\n");

    // Первая строка — это title
    const title = (lines.shift() ?? "").trim();

    let image: string | undefined;
    let place: string | undefined;
    let time: string | undefined;
    let source: string | undefined;

    // Многострочный Opis
    const descriptionLines: string[] = [];
    let opisMode = false;

    for (const line of lines) {
      const clean = line.trim();

      if (clean.startsWith("- **Zdjęcie:**")) {
        image = clean.replace(/- \*\*Zdjęcie:\*\*\s*/, "").trim();
        continue;
      }

      if (clean.startsWith("- **Miejsce:**")) {
        place = clean.replace(/- \*\*Miejsce:\*\*\s*/, "").trim();
        continue;
      }

      if (clean.startsWith("- **Czas:**")) {
        time = clean.replace(/- \*\*Czas:\*\*\s*/, "").trim();
        continue;
      }

      if (clean.startsWith("- **Źródło:**")) {
        source = clean.replace(/- \*\*Źródło:\*\*\s*/, "").trim();
        continue;
      }
      if (clean.startsWith("- **Opis:**")) {
        opisMode = true;
        descriptionLines.push(
          clean.replace(/- \*\*Opis:\*\*\s*/, "").trim()
        );
        continue;
      }
      
      if (opisMode) {
        if (clean === "---") continue;
        if (clean.length === 0) continue; 
        descriptionLines.push(clean);
      }
    }

    const description = descriptionLines.join("\n").trim();

    const isActivity = place || time;

    return {
      type: isActivity ? "event" : "news",
      title,
      image,
      place,
      time,
      source,
      description,
    };
  });
}
