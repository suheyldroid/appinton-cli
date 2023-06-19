import path from "path";
import { fileExists } from "./fileExists";
import { loadJSON } from "./loadJson";

export function getPackageJson() {
  const _packagePath = path.join(process.cwd(), "package.json");
  fileExists(_packagePath);
  return loadJSON(_packagePath);
}
