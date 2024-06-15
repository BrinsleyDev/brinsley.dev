import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../tailwind.config.mjs"

const config = resolveConfig(tailwindConfig)

export const colors = config.theme.colors

export const theme = config.theme
