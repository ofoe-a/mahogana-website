/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#0C2B1C",
        "brand-sand": "#E5D5C0",
        "brand-gold": "#C9A227",
        "brand-leaf": "#1F4D36",
        "brand-mist": "#F5F1EA",
        "brand-brown": "#3B2414",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};