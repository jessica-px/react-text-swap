import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import sass from "rollup-plugin-sass";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [typescript(), sass({ insert: true })],
};
