import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // LIGHT MODE COLORS
        primary: "#10451D",
        secondary: "#FF7D29",
        "secondary-container": "#FF7D29",
        "on-surface": "#32373A",
        "on-surface-variant": "#838F94",
        "on-secondary": "#10451D",
        surface: "#FBFBFB",
        "surface-bright": "#727F85",
        "surface-variant": "#EEEFF0",
        outline: "#A6AEB2",
        "outline-variant": "#E7EAEB",
        "surface-container": "#F4F5F6",
        "surface-container-highest": "#EEEFF0",
        "surface-container-high": "#F1F2F3",
        "surface-container-low": "#F7F8F9",
        tertiary: "#316F79",
        "tertiary-container": "#A4D2DA",
        error: "#A33434",
        success: "#458D43",
        background: "#FBFBFB",
        accent: {
          1: {
            container: "#F7E7B2",
          },
          5: {
            container: "#E4D8DE",
          },
        },

        // DARK MODE COLORS
        "primary-dark": "#5C7B85",
        "secondary-dark": "#FEFFD2",
        "secondary-container-dark": "#FEFFD2",
        "on-surface-dark": "#EEEFF0",
        "on-surface-variant-dark": "#E7EAEB",
        "on-secondary-dark": "#10451D",
        "surface-dark": "#282C2E",
        "surface-bright-dark": "#727F85",
        "surface-variant-dark": "#838F94",
        "outline-dark": "#DFE2E3",
        "outline-variant-dark": "#838F94",
        "surface-container-dark": "#3C4245",
        "surface-container-highest-dark": "#636E74",
        "surface-container-high-dark": "#464D51",
        "surface-container-low-dark": "#32373A",
        "tertiary-dark": "#86C4CE",
        "tertiary-container-dark": "#A4D2DA",
        "error-dark": "#F88989",
        "success-dark": "#9AE298",
        "background-dark": "#282C2E",
        "accent-dark": {
          1: {
            container: "#F7E7B2",
          },
          5: {
            container: "#E4D8DE",
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
