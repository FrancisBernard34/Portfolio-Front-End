import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "var(--orange)",
        light_orange: "rgba(211, 95, 12, 0.9)"
      },
      screens: {
        'sm': '560px',
        'lg': '1070px',
      },
    },
  },
  plugins: [],
} satisfies Config;
