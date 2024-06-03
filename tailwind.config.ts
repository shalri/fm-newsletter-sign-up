import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "nl-tomato": "hsl(4, 100%, 67%)",
        // Neutral
        "nl-dark-slate-grey": "hsl(235, 29%, 20%)",
        "nl-charcoal-grey": "hsl(235, 18%, 26%)",
        "nl-grey": "hsl(231, 7%, 60%)",
        "nl-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        roboto: ["Roboto", "serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      fontSize: {
        body: "16px",
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
