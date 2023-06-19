import { loadTsConfig } from "config-file-ts";

import path from "path";
import { fileExists } from "./fileExists";
export function getClusterConfig() {
  const _configPath = path.join(process.cwd(), "appinton.config.ts");
  fileExists(_configPath);
  const config = loadTsConfig<any>(_configPath);
  return config;
}
