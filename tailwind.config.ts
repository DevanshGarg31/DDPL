import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e4e2dd',
        'black-gray': '#292929',
        'my-white': '#f4f4f4',
        'my-black': '#3B3937'
      },
    },
  },
  plugins: [],
}
export default config
