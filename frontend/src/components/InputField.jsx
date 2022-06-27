import React from 'react'
import { Box, InputBase, IconButton, Paper } from '@mui/material'

function InputField({width, icon, iconbg, iconbgHover, paperbg, placeholder, inputColor, bdColor='black'}) {
  return (
    <Box>
        <Paper 
            component='form'
            sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth:width, 
                borderRadius: '25px',
                bgcolor: paperbg,
                boxShadow:'none',
                border:`1px solid ${bdColor}`
            }}
        >
            <InputBase
                sx={{ml:2, flex:1, color:inputColor}}
                placeholder={placeholder}
                aria-label='Input'
            />
            <IconButton 
                type="submit" 
                sx={{
                    p: '10px', borderRadius:'50%', 
                    bgcolor:iconbg, right:'-2', 
                    '&:hover': {bgcolor:iconbgHover}
                }} 
                aria-label="search"
            >
                {icon}
            </IconButton>
        </Paper>
    </Box>
  )
}

export default InputField