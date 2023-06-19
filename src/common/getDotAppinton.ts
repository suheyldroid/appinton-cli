import path from "path";
import { loadJSON } from "./loadJson";
import fs from "fs";

const CONFIG_PATH = path.join(process.cwd(), ".appinton");

export function getDotAppinton() {
  const cluster = loadJSON(CONFIG_PATH, true);
  return cluster;
}

export function writeDotAppinton(data: any) {
  const cluster = loadJSON(CONFIG_PATH, true);
  const _cluster = {
    ...cluster,
    ...data,
  };
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(_cluster, null, 2));
  return _cluster;
}
