import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import shebang from "rollup-plugin-preserve-shebang";
export default {
  input: "src/main.ts",
  output: {
    file: "dist/main.js",
    format: "es",
  },
  plugins: [typescript(), terser(), shebang()],
};
