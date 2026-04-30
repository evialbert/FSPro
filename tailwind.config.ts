import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "Pudrată" (Muted Stone & Olive)
        // Am setat nuanțe de la 50 (foarte deschis) la 900 (foarte închis)
        stone: {
          50: '#f5f5f4',  // Fundaluri foarte deschise
          100: '#e7e5e4', // Borduri subtile
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#57534e', // Olive/Măsliniu pudrat (Accent)
          600: '#44403c',
          700: '#292524', // Text/Elemente de autoritate
          800: '#1c1917',
          900: '#0c0a09',
        },
        // Branding integrat pentru a păstra consistența în cod
        brand: {
          dark: "#292524",   // Folosește stone-700
          accent: "#57534e", // Folosește stone-500
          light: "#f5f5f4",  // Folosește stone-50
        },
      },
      // Am păstrat animațiile pentru un aspect modern și fluid
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