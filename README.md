# Personal ESLint configuration file

Example usage

```javascript
/** @type {import("eslint").Linter.Config} */
const config = {
    root: true,
    env: {
        node: true,
        es2022: true
    },
    extends: ["moongoal"],
    ignorePatterns: ["./*/dist/*"]
};

module.exports = config;
```
