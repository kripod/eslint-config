import type { TSESLint } from "@typescript-eslint/utils";
import tseslint from "typescript-eslint";

const config: TSESLint.FlatConfig.Config[] = [
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
  },
];

export default config;
