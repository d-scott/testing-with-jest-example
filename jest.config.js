module.exports = {
    verbose: true,
    testRegex: "/test/.*test.js$",
    setupFiles: [
        "./test/.setup.js"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.js",
        "!test/.setup.js"
    ],
    coverageDirectory: "./coverage"
};
