/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    display: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        img1: 'url("./components/assets/dessert1.jpg")',
        img2: 'url("./components/assets/dessert2.jpg")',
        img3: 'url("./components/assets/dessert3.jpg")',
        img4: 'url("./components/assets/dessert4.jpg")',
        img5: 'url("./components/assets/dessert5.jpg")',
        img6: 'url("./components/assets/dessert6.jpg")',
        img7: 'url("./components/assets/dessert7.jpg")',
      },
      zIndex: {
        10000: "10000",
      },
    },
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif","Noto Sans TC"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("tailwindcss-children")],
};
