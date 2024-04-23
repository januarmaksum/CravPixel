/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF2E63",
        secondary: "#252A34",
        "cp-dark-blue": "#252A34",
        "cp-red": "#FF2E63",
        "cp-whitesmoke": "#EAEAEA",
        "cp-blue-light": "#08D9D6",
      },
      animation: {
        border: "border 4s ease infinite",
        "diagonal-bounce": "diagonal-bounce 3s infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "diagonal-bounce": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(15px, -20px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF2E63",
          secondary: "#252A34",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
  },
};
