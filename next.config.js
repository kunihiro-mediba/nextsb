const basePath = process.env.BASE_PATH ?? "";

module.exports = {
    productionBrowserSourceMaps: true,
    // trailingSlash: true,
    basePath,
    // distDir: "build",
    trailingSlash: true,
};
