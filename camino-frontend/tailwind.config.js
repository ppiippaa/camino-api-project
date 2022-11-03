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
      'white': '#fff',
      'black': '#000',
      'bg-yellow': '#fffcc1',
      'bg-blue': '#87b7fc'
    },
    fontFamily: {
      'accent' : ['Montserrat', 'sans-serif'],
      'regular': ['Merriweather', 'serif']
    },
    // spacing: {
    //   '1': '8px',
    //   '2': '12px',
    //   '3': '16px',
    //   '4': '24px',
    //   '5': '32px',
    //   '6': '48px',
    //   '7': '52px',
    //   '10': '400px'
    // },

    extend: {},
  },
  plugins: [],
}

// 'blue': '#167BD3',