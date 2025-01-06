import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        primary: "#fed700",
        gray: "#efefef",
        gray_text: "#48525b",
        gray_dark: "#8f8f8f",
        light_1: "#dddddd",
        light_2: "#e0e0e0",
        light_3: "#eaeaea",
        blue:"#0062bd",
        red:"#dc3545",
        black:"#36414b",
        text_dark: "#333e48",
        dark_opacity: "#48525bba",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite'
			},
    },
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    fill: true, 
  },
} satisfies Config;