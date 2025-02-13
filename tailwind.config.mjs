/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          gray: "#4E4E50",
          shadeGray: "#616161",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    },
  },
  plugins: [],
};
