import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "react-hooks": reactHooks, // Import the React Hooks plugin
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prefer-const": "error", // Suggest using const where possible
      "react-hooks/rules-of-hooks": "error", // Rules for correct usage of Hooks
      "react-hooks/exhaustive-deps": "warn", // Missing dependencies in useEffect
    },
  },
]);
