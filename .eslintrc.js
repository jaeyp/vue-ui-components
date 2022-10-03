module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    "no-console": ["warn", { allow: ["error"] }],
  },
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser",
      },
    },
    {
      files: ["*.vue"],
      plugins: ["vue"],
      extends: "plugin:vue/base",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: {
          ts: "@typescript-eslint/parser",
        },
      },
    },
  ],
};
