/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kid: {
          blue: '#3B82F6',
          sky: '#38BDF8',
          yellow: '#FBBF24',
          amber: '#F59E0B',
          green: '#10B981',
          emerald: '#059669',
          purple: '#8B5CF6',
          pink: '#EC4899',
          rose: '#F43F5E',
          orange: '#FB923C',
          cream: '#FFFBEB',
          paper: '#FEFCE8'
        }
      },
      fontFamily: {
        comic: ['"Comic Sans MS"', '"Chalkboard SE"', '"Comic Neue"', 'sans-serif'],
        friendly: ['"Quicksand"', '"Nunito"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'bouncy': '0 6px 0 0 rgba(0, 0, 0, 0.1)',
        'bouncy-hover': '0 8px 0 0 rgba(0, 0, 0, 0.12)',
        'bouncy-active': '0 2px 0 0 rgba(0, 0, 0, 0.15)',
        'fun': '0 10px 25px -5px rgba(245, 158, 11, 0.3)'
      }
    },
  },
  plugins: [],
}
