/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'16px',
      },
      colors :{
        primary:'#14b8a6',
        secondary:'#64748b',
        dark:'#0f172a',
        grey: '#33333'
      }
    },
  },
  plugins: [],
}
