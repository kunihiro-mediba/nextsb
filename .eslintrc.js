module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    plugins: ["@typescript-eslint", "jest"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "next",
        "next/core-web-vitals",
        "prettier",
    ],
    rules: {
        "curly": "error",
        "no-else-return": "error",
        // "no-console": "warn",
    },
};
