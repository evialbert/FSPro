import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./globals.css",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#003366",
          light: "#06b6d4",
        },
      },
    },
  },
  plugins: [],
};

export default config;