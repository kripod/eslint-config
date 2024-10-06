import globals from "globals";

import baseConfig from "./dist/esm/base.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { files: ["**/*.{js,jsx,ts,tsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  ...baseConfig,
];
