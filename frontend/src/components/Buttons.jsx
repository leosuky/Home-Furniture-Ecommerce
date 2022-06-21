import { Button } from '@mui/material'
import styled from '@emotion/styled'

const StyledButton = styled(Button)(({theme, width}) => ({
    width: width,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    padding: '8px, 20px',
    borderRadius: 50,
    textTransform:'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,}
}))

  
const StyledButtonAlt = styled(Button)(({theme}) => ({
    backgroundColor : theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderRadius: 50,
    textTransform:'capitalize',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,}
}))


export {StyledButton, StyledButtonAlt}
