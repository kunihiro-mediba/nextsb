const basePath = process.env["BASE_PATH"] ?? "";

module.exports = {
    basePath,
    // distDir: "build",
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    trailingSlash: true,
};
