import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          100: "#fef3c7",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b"
        },
        indigo: {
          700: "#4338ca",
          900: "#312e81",
          200: "#c7d2fe"
        }
      }
    }
  },
  plugins: [],
};
export default config;
