import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginImport from "eslint-plugin-import";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

// Importer manuellement les configurations recommandées
const recommendedJS = js.configs.recommended;
const recommendedTs = tsEslintPlugin.configs.recommended;

export default [
  {
    ignores: ["dist"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser, // Utilisation du parser TypeScript
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: eslintPluginImport,
      "@typescript-eslint": tsEslintPlugin,
    },
    // Intégrer manuellement les règles recommandées
    rules: {
      ...recommendedJS.rules,
      ...recommendedTs.rules,
      ...reactHooks.configs.recommended.rules, // Règles recommandées pour les hooks React
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      "import/order": [
        1,
        {
          groups: [
            "external",
            "builtin",
            "internal",
            "sibling",
            "parent",
            "index",
          ],
        },
      ],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
