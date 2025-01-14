/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Assets/**/*.{js,jsx,ts,tsx}",
    "./src/Pages/**/*.{js,jsx,ts,tsx}",
    "./src/Components/**/*.{js,jsx,ts,tsx}",
    "./src/Components/*.{js,jsx,ts,tsx}",
    // "./src/Components/ProgressBar/index.jsx.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        custom: {
          'primary-background': "var(--primary-background)",
          'text': "var(--text)",
          'secondary-background': "var(--secondary-background)",
          'primary-outline': "var(--outline)",
          'button-bg-primary': "var(--button-bg-primary)",
          'button-bg-secondary': "var(--button-bg-secondary)",
          'button-text': "var(--button-text)",
          'contact-bg': "var(--contact-bg)",


          success: "rgb(var(--color-success) / <alpha-value>)",
          info: "rgb(var(--color-info) / <alpha-value>)",
          warn: "rgb(var(--color-warn) / <alpha-value>)",
          error: "rgb(var(--color-error) / <alpha-value>)",
        }
      },
      flexJustify: {
        start: "justify-content: flex-start",
        end: "justify-content: flex-end",
        center: "justify-content: center",
        between: "justify-content: space-between",
        around: "justify-content: space-around",
        evenly: "justify-content: space-evenly",
      },
      flexAlign: {
        start: "align-items: flex-start",
        end: "align-items: flex-end",
        center: "align-items: flex-center",
      },
    },
  },
  plugins: [],
};
