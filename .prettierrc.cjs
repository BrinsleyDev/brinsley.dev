/** @type {import("prettier").Config} */
module.exports = {
    bracketSpacing: true,
    semi: false,
    singleAttributePerLine: true,
    singleQuote: false,
    tabWidth: 4,

    plugins: [require.resolve("prettier-plugin-astro")],

    overrides: [{ files: "*.astro", options: { parser: "astro" } }],
}
