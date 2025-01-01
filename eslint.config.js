import globals from "globals";
import baseConfig from "./dist/esm/base.js";
import typeCheckedConfig from "./dist/esm/type-checked.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { files: ["**/*.jsx", "**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"] },
  { ignores: ["dist/", ".tshy-build/"] },
  ...baseConfig,
  ...typeCheckedConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
