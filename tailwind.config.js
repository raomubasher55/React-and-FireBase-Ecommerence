import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('../my-project/src/assets/2024_06_22_kids_mb.png')",
      }
    },
  },
  plugins: [],
});