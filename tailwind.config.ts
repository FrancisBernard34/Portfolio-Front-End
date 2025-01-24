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
        light_orange: "var(--light_orange)"
      },
      screens: {
        'sm-min': '480px',
        'sm': '560px',
        'sm-max': '680px',
        'md': '820px',
        'lg': '1070px',
        'lg-max': '1170px',
        '3xl': '1720px',
        'footer-2xl': "1400px"
      },
    },
  },
  plugins: [],
} satisfies Config;
