import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sasRed: "#C50006",
        sasRedLight: "#DD5A5A",
        sasPink: "#F4C3F3",
        sasBlue: "#190089",
        sasSkyLight: "#3F9CDE",
        sasGreen: "#00D804",
        sasLightGreen: "#81E484",
        sasLightBlue: "#CFE4FF",
        sasPurple: "#6D68FF",
        sasLightGray: "#C8C8C6",
        icct: {
          primary: "#190089",
          secondary: "#3F9CDE",
          accent: "#6D68FF",
          light: "#CFE4FF",
          dark: "#0A0044",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
export default config;
