/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gambitor_main_img": "url('/images/common/background/Gambitor.png')",
      },
      fontFamily: {
        gold: ['var(--font-goldman)'],
        
      },
    },
  },
  plugins: [],
};
