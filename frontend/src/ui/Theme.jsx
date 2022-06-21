import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let GlobalTheme = createTheme({
    palette: {
        common: {
            orange: '#C81809',
            yellow: '#fdcb4b',
        },
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#DE5212'
        }
    }
})

GlobalTheme = responsiveFontSizes(GlobalTheme)

// breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
// }

export default GlobalTheme