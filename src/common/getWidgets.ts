import path from "path";
import { fileExists } from "./fileExists";
import fs from "fs";

export async function getWidgets() {
  const widgetsPath = path.join(process.cwd(), "dist/cluster.cjs");
  fileExists(widgetsPath, false);
  const cluster = await import(widgetsPath);
  const config = cluster?.default?.widgetsConfig ?? {};

  const bundle = fs.readFileSync(widgetsPath, "utf-8");

  const bundleBlob = new Blob([bundle]);
  return {
    config,
    bundle: bundleBlob,
  };
}
