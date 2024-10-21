import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        agdasima: ['Agdasima', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #dbc3bd, #d1c8c1, #b1aef0)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: '#fca5a5',
        customDarkP: '#7E7491',
        customClairP:'#998CAF',
      },
    },
  },
  plugins: [],
};
export default config;
