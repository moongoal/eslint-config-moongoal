/** @type {import("eslint").Linter.Config} */
const config = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    rules: {
        quotes: ["error", "double"],
        "arrow-parens": ["warn", "as-needed"],
        "comma-dangle": ["warn", "never"],
        "semi": ["error", "always", { omitLastInOneLineBlock: true }],
        "@typescript-eslint/no-unused-vars": "warn"
    },
    ignorePatterns: ["./*/dist/*"],
    overrides: [
        { // Configuration files
            files: [
                ".eslintrc.js",
                "webpack.config.js",
                "jest.config.js"
            ],
            env: {
                node: true
            },
            parser: "eslint/parser"
        }
    ]
};

module.exports = config;
