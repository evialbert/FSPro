import type { Config } from "tailwindcss";

const config: Config = {
  // Aici definim unde se află fișierele care folosesc clase Tailwind
  // Este vital să avem toate aceste rute pentru ca stilurile să fie generate
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Adăugăm și fișierul de layout și globals pentru siguranță
    "./app/layout.tsx",
    "./app/globals.css",
  ],
  theme: {
    extend: {
      // Culorile tale personalizate pentru Fine Solutions Pro
      colors: {
        brand: {
          dark: "#003366",    // Albastru închis profesional
          light: "#06b6d4",   // Cyan/Albastru deschis pentru accente
          gray: "#f8fafc",    // Fundal gri foarte deschis
        },
      },
      // Am adăugat animații pentru un aspect modern
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
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