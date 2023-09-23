/** @type {import("eslint").Linter.Config} */
const config = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    rules: {
        quotes: ["error", "double"],
        "arrow-parens": ["warn", "as-needed"],
        "comma-dangle": ["warn", "never"],
        "semi": ["error", "always", { omitLastInOneLineBlock: true }]
    },
    ignorePatterns: ["./*/dist/*"]
};

module.exports = config;
