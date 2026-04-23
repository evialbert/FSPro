import type { Config } from "tailwindcss";

const config: Config {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Aceasta linie este esențială!
  ],
  theme: {
    extend: {
      colors: {
        // Aici poți defini culorile tale personalizate dacă vrei
        brand: "#003366",
      },
    },
  },
  plugins: [],
};
export default config;