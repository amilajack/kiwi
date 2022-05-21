import ts from "rollup-plugin-ts";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./browser.ts",
  output: [
    {
      file: "browser.js",
      format: "esm",
    },
    {
      file: "browser.min.js",
      format: "esm",
      plugins: [terser()],
    },
  ],
  plugins: [resolve({ extensions: [".js", ".ts"] }), ts()],
};
