import type { Config } from "tailwindcss";

const config: Config = {
  // Aici îi spunem lui Tailwind unde să caute clasele tale (ex: text-cyan-500)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./globals.css",
  ],
  theme: {
    extend: {
      // Am adăugat culorile tale principale aici pentru a fi ușor de folosit
      colors: {
        brand: {
          dark: "#003366",
          light: "#06b6d4", // cyan-500
        },
      },
      // Am adăugat animația de fade-in pentru badge-uri
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;