import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          light: "#383838",
          DEFAULT: "#282828",
          dark: "#202020",
        },
        primaryBackground: "#111111",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
