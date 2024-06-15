import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import icon from "astro-icon"
import aws from "astro-sst"

// https://astro.build/config
export default defineConfig({
    site: "https://brinsley.dev",
    output: "server",
    adapter: aws(),
    integrations: [
        tailwind(),
        icon({
            include: {
                mdi: [
                    "check",
                    "check-circle",
                    "chevron-down",
                    "chevron-up",
                    "code",
                    "github",
                    "linkedin",
                    "message-outline",
                    "send",
                    "star",
                ],
                tabler: [
                    "bulb-filled",
                    "rosette-discount-check-filled",
                    "sql",
                    "stack-2-filled",
                ],
                ri: ["team-fill"],
                logos: ["*"],
                devicon: ["*"],
            },
        }),
        solidJs({ devtools: true }),
    ],
})
