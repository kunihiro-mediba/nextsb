module.exports = {
    preset: 'ts-jest',
    moduleNameMapper: {
        "\\.s?css$": "identity-obj-proxy",
    },
    globals: {
        "ts-jest": {
            tsconfig: {
                jsx: "react",
            },
        },
    },
};
