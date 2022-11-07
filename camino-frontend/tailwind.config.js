/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#0e2f7d',
      'yellow': '#F9ED16',
      'lightYellow': '#fffdd8',
      'grey': '#646C73',
      'lightGrey': '#abafb3',
      'white': '#fff',
      'black': '#000',
      'bg-yellow': '#fffcc1',
      'bg-blue': '#87b7fc'
    },
    fontFamily: {
      'accent' : ['Montserrat', 'sans-serif'],
      'regular': ['Merriweather', 'serif'],
      'code': ['IBM Plex Mono', 'mono space']
    },
    extend: {},
  },
  plugins: [],
}

// 'blue': '#167BD3',