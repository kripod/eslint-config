import globals from "globals";

import baseConfig from "./dist/esm/base.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { files: ["**/*.{js}"] }, // TODO: Add `ts`
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  ...baseConfig,
];
