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
    extends: ["moongoal"]
};

module.exports = config;
```

Recommended versioning

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "devDependencies": {
    "eslint-config-moongoal": "*"
  }
}
```
