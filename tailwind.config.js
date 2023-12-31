/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#e62429",
        white: "#FFFFFF",
        black: "#000000",
        light: "#AAAAAA",
        dark: "#202020",
        darker: "#212121",
        gray: {
          light: "#e5e5e5",
          medium: "#b2b2b2",
          ash: "#767676",
          charcoal: "#151515",
        },
      },
    },
  },
  plugins: [],
};
