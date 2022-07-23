/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920PX",
        // print: { raw: "print" },
      },
      backgroundImage: {
        banner: "url('./images/banner.jpg')",
        bgBanner: "url('./images/bg-banner.jpg')",
      },
    },
  },
  plugins: [],
};
