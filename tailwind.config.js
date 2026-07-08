/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moon-ivory':     '#F5F1E8',
        'midnight-navy':  '#1B2436',
        'ink-black':      '#14120F',
        'walnut-brown':   '#4A3728',
        'antique-gold':   '#B8935A',
        'dusty-sage':     '#8A9A82',
        'warm-amber':     '#C97C3D',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', '"Times New Roman"', 'serif'],
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        hand:  ['Caveat', 'cursive'],
      },
      maxWidth: {
        'reading': '42.5rem',   // 680px — prose column
        'content': '72rem',     // 1152px — full content area
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
}