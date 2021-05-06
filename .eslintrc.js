module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "curly": "error",
        // "no-console": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
    },
};
