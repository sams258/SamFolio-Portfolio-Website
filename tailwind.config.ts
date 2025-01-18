import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        teal: {
          DEFAULT: "#009999", // Main teal
          light: "#20B2AA",   // Light teal
        },
        orange: {
          DEFAULT: "#FFA500", // Main orange
          light: "#FFD580",   // Light orange
        },
        grey: {
          DEFAULT: "#666666", // Main grey
          dark: "#666666",    // Dark grey
        },
      },
      backdropBlur: {
        sm: "4px",
        md: "12px",
      },
      boxShadow: {
        neumorphic: "8px 8px 15px #bebebe, -8px -8px 15px #ffffff",
      },
    },
  },
  plugins: [forms, aspectRatio],
} satisfies Config;

