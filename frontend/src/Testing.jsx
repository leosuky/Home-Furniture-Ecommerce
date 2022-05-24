import React from 'react'
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import { Typography, Box } from '@mui/material';
let theme = createTheme()
theme = responsiveFontSizes(theme)

function Testing() {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
            <Typography variant='h1'>The quick Brown fox jumped over lalala</Typography>
            <Typography variant='h3'>The quick Brown fox jumped over lalala</Typography>
            <Typography variant='h5'>The quick Brown fox jumped over lalala</Typography>
            <Typography variant='p'>The quick Brown fox jumped over lalala</Typography> {/* THIS IS A <SPAN> */}
            <Typography variant='body1'>The quick Brown fox jumped over lalala</Typography> {/* THIS IS A <P> */}
            <Typography variant='subtitle1'>The quick Brown fox jumped over lalala</Typography> {/* THIS IS A <H6> */}
        </Box>
    </ThemeProvider>
  )
}

export default Testing