/** @type {import("eslint").Linter.Config} */
const config = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    rules: {
        quotes: ["error", "double"],
        "arrow-parens": ["warn", "as-needed"],
        "comma-dangle": ["warn", "never"],
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "semi": ["error", "always", { omitLastInOneLineBlock: true }],
        "semi-spacing": "error",
        "@typescript-eslint/no-unused-vars": "warn",
        "function-call-argument-newline": ["warn", "consistent"],
        "object-curly-spacing": ["warn", "always"],
        "block-spacing": ["warn", "always"],
        "indent": ["warn", 4]
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
