import fs from "fs";
export function fileExists(path: string, safe: boolean = true) {
  if (fs.existsSync(path)) return true;
  if (safe) return false;
  throw new Error("File not found at " + path);
}
