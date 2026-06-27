/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline-variant": "#dcc1b3",
        "primary": "#954500",
        "secondary": "#934b19",
        "tertiary": "#765700",
        "background": "#fbf9f8",
        "surface": "#fbf9f8",
        "surface-variant": "#e4e2e1",
        "surface-container": "#f0eded",
        "surface-container-low": "#f6f3f2",
        "surface-container-highest": "#e4e2e1",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#564338",
        "primary-container": "#b85a0c",
        "on-primary-container": "#fffbff",
        // (Anda bisa menyalin sisa warna dari script HTML sebelumnya ke sini)
      },
      fontFamily: {
        "display-lg": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}