import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "18.3",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
    },
  },
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked
);
