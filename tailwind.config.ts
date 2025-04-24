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
        h_primary: "#f1cc04",
        gray: "#efefef",
        gray_text: "#48525b",
        gray_dark: "#8f8f8f",
        light_1: "#dddddd",
        light_2: "#e0e0e0",
        light_3: "#eaeaea",
        blue:"#34bcec",
        dark_blue: "#0062BD",
        red:"#dc3545",
        black:"#36414b",
        text_dark: "#333e48",
        bg_hover: "#48525b80",


				'dark-1': '#000000',
				'dark-2': '#09090A',
				'dark-3': '#101012',
				'dark-4': '#1F1F22',
				'light-1': '#FFFFFF',
				'light-2': '#EFEFEF',
				'light-3': '#7878A3',
				'light-4': '#5C5C7B',
      },
      animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite'
			},
    },
  },
  plugins: [],
  corePlugins: {
    fill: true, 
  },
} satisfies Config;