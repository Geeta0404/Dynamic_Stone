import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfcfa",
          100: "#f8f4ee",
          200: "#f0e8dd",
        },
        stone: {
          50: "#f8f6f3",
          100: "#efeae3",
          200: "#ded4c6",
          300: "#c8b8a4",
          400: "#ad9580",
          500: "#8f7762",
          600: "#73604f",
          700: "#5c4d40",
          800: "#352e26",
          900: "#211c17",
          950: "#14110d",
        },
        terracotta: {
          50: "rgb(var(--terracotta-50) / <alpha-value>)",
          100: "rgb(var(--terracotta-100) / <alpha-value>)",
          200: "rgb(var(--terracotta-200) / <alpha-value>)",
          300: "rgb(var(--terracotta-300) / <alpha-value>)",
          400: "rgb(var(--terracotta-400) / <alpha-value>)",
          500: "rgb(var(--terracotta-500) / <alpha-value>)",
          600: "rgb(var(--terracotta-600) / <alpha-value>)",
          700: "rgb(var(--terracotta-700) / <alpha-value>)",
          800: "rgb(var(--terracotta-800) / <alpha-value>)",
          900: "rgb(var(--terracotta-900) / <alpha-value>)",
        },
        brass: {
          50: "rgb(var(--brass-50) / <alpha-value>)",
          100: "rgb(var(--brass-100) / <alpha-value>)",
          200: "rgb(var(--brass-200) / <alpha-value>)",
          300: "rgb(var(--brass-300) / <alpha-value>)",
          400: "rgb(var(--brass-400) / <alpha-value>)",
          500: "rgb(var(--brass-500) / <alpha-value>)",
          600: "rgb(var(--brass-600) / <alpha-value>)",
          700: "rgb(var(--brass-700) / <alpha-value>)",
          800: "rgb(var(--brass-800) / <alpha-value>)",
          900: "rgb(var(--brass-900) / <alpha-value>)",
        },
        sage: {
          50: "#f4f6f3",
          100: "#e4e9e0",
          200: "#c8d2c0",
          300: "#a6b89a",
          400: "#869f78",
          500: "#6b8359",
          600: "#536845",
          700: "#3f4f35",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(40, 34, 28, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
