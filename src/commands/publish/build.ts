import * as Vite from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { getPackageJson } from "../../common/getPackageJson";
import { fileExists } from "../../common/fileExists";

export async function build() {
  const packageJson = getPackageJson();

  const entryDir = path.join(process.cwd(), "src/widgets/index.ts");
  fileExists(entryDir, false);

  await Vite.build({
    plugins: [react()],
    build: {
      reportCompressedSize: true,
      lib: {
        entry: entryDir,
        formats: ["cjs"],
        fileName: "cluster",
      },
      rollupOptions: {
        external: Object.keys(packageJson.dependencies),
      },
    },
  });
}
