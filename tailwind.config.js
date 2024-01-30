/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
        // Using modern `hsl`
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        black:'black',
        white:'white',
        yellow:'yellow',
        gray:'#D3D3D3',
        red:'red',
        primary1: 'hsl(var(--color-primary1) / <alpha-value>)',
primary2:'hsl(var(--color-primary2) / <alpha-value>)',
primary3:'hsl(var(--color-primary3) / <alpha-value>)',
primary4:'hsl(var(--color-primary4) / <alpha-value>)'




    }
    , fontFamily:{
      manrope:['Manrope']
    }
  
},}
