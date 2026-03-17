import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        slate: {
          25: "#f8fafc",
        },
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          900: "#0f172a"
        },
        accent: {
          100: "#ecfeff",
          500: "#0891b2"
        },
        mist: {
          50: "#eef1f6",
          100: "#e4eaf2",
          200: "#cfd9e5",
          700: "#4b5d71",
          900: "#2f4154"
        }
      },
      boxShadow: {
        soft: "0 20px 60px -24px rgba(15, 23, 42, 0.28)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(37,99,235,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.10) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
