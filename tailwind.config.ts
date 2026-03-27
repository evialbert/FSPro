/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Culorile brandului tău
        fineBlue: '#003366',    // Albastru închis (Profesional/Business)
        fineAccent: '#3b82f6',  // Albastru deschis (Interactivitate/Hover)
        fineLight: '#f8fafc',   // Fundal gri foarte deschis (Slate 50)
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}