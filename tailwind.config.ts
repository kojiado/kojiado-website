import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: "#F9485C",
        primaryDark: "#121212",
        primaryLight: "#FFFFFF",
        textDark: "#898989",
        textLight:"#717171",
        borderDark: "#2A2A2A",
        borderLight:"#DBDBDB",
        primaryDark2: "#1E1E1E",
        primaryLight2: "#EDEDED",
      },
      fontFamily: {
        mainFont: ['ClashGrotesk-Variable', 'sans-serif'],
        ubuntu: ['Ubuntu', "sans-serif"],
        openSans: ['Open Sans', "sans-serif"],
        interphasesBold: ["InterphasesBold", "sans-serif"],
        interphasesDemiBold: ["InterphasesDemiBold", "sans-serif"],
        gochiHand:["Gochi Hand", "cursive"]
      },
    },
    screens: {
      xs: "480px",
      ns: "540px",
      ss: "620px",
      sm: "768px",
      ssm: "845px",
      smd: "960px",
      md: "1060px",
      lg: "1200px",
      mlg: "1300px",
      xl: "1400px",
      xxl: "1700px",
      short: { 'raw': '(max-height: 800px) and (max-width: 412px)' },
    },
  },
  plugins: [],
}
export default config
