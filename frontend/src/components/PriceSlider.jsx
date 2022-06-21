import React from 'react'
import { Box} from '@mui/material'
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled'


function valueLabelFormat(value) {
    return `$${value*10}`;
}

const MoneySlider = styled(Slider)(({theme}) => ({
    color: theme.palette.secondary.main,
    height: 5,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      color:theme.palette.primary.main,
      lineHeight: 1.2,
      fontSize: 14,
      fontWeight:700,
      background: 'unset',
      padding: 0,
      width: 40,
      height: 40,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: theme.palette.secondary.main,
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
}));


function PriceSlider() {
    const [value, setValue] = React.useState([20, 40]);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const marks = [
        {
            value:0,
            label:'$0'
        },
        {
            value:100,
            label:'$1000'
        }
    ]

    
  return (
   <Box maxWidth='300px' mt='1rem'>
    <MoneySlider
        color='secondary'
        marks={marks}
        onChange={handleChange}
        value={value}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
    />
   </Box>
  )
}

export default PriceSlider