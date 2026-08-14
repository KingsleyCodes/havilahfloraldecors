/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If using Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If using Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If using a src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}