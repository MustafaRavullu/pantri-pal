import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        searchCircular: {
          "0%": { transform: "translate(0, 0), scale(1,1)" },
          "25%": { transform: "translate(-9px, 4px) scale(1.2,1.2)" },
          "50%": { transform: "translate(-8px, -8px) scale(1.5,1.5)" },
          "75%": { transform: "translate(-4px, -9px) scale(1.2,1.2)" },
          "100%": { transform: "translate(0, 0) scale(1,1)" },
        },
      },
      animation: {
        searchCircular: "searchCircular 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
