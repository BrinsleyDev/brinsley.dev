import colors from "tailwindcss/colors"

/** @type {import("tailwindcss").Config.theme.colors} */
const themeColors = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    success: colors.green,
    error: colors.red,
    feature: colors.purple,
    secondary: colors.amber,
    primary: {
        50: "#f2f7fd",
        100: "#e4edfa",
        200: "#c3daf4",
        300: "#8fbdea",
        400: "#539bdd",
        500: "#2d7eca",
        600: "#1e64ae",
        700: "#194f8b",
        800: "#194473",
        900: "#1a3a60",
        950: "#102040",
        975: "#091122",
    },
    neutral: {
        50: "#f6f7f9",
        100: "#eceef2",
        200: "#d5dae2",
        300: "#b0b9c9",
        400: "#8593ab",
        500: "#667691",
        600: "#515f78",
        700: "#434d61",
        800: "#3a4252",
        900: "#343a46",
        950: "#23262d",
        975: "#13151a",
    },
}

/** @type {import("tailwindcss").Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: themeColors,
    },
    plugins: [],
}
