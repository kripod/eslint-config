import { defineConfig } from "eslint/config";
import globals from "globals";
import baseConfig from "./dist/esm/base.js";
import typeCheckedConfig from "./dist/esm/type-checked.js";

export default defineConfig([
  { files: ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.jsx", "**/*.tsx"] },
  { ignores: ["dist/", ".tshy-build/"] },
  ...baseConfig,
  ...typeCheckedConfig,
  {
    languageOptions: {
      globals: {
        ...globals["shared-node-browser"],
      },
    },
  },
]);
