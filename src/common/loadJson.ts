import { fileExists } from "./fileExists";
import fs from "fs";

export function loadJSON(path: string, safe: boolean = false) {
  const fileEsxists = fileExists(path, safe);
  if (!fileEsxists) return null;
  const JSONFile = fs.readFileSync(path, "utf-8");
  const parsedJSONFile = JSON.parse(JSONFile);
  return parsedJSONFile;
}
