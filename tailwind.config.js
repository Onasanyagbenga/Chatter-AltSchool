/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black1: "rgba(0,0,0,0.8)",
        banner: "rgb(255, 192, 23)",
      },
      fontFamily: {
        title: `gt-super, Georgia, Cambria,Times New Roman, Times, serif;`,
        texts: `sohne, Helvetica Neue, Helvetica, Arial, sans-serif`,
      },
      gridTemplateColumns: {
        card: "repeat(auto-fit, minmax(280px, 1fr))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
