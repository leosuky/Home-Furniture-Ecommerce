import React from 'react'
import { 
    Box, Radio, RadioGroup, 
    FormControl, FormControlLabel, 
    FormLabel, Button
 } from '@mui/material'
 import { useDispatch } from 'react-redux'
 import { useNavigate } from 'react-router-dom'
 import { savePaymentMethod } from '../appStore/slices/CartSlice'

// ICONS
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {FaTruck} from 'react-icons/fa'

function PaymentPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = React.useState('')

    const handleChange = (e) => {
        setPaymentMethod(e.target.value)
    }

    // submit form
    const handleSubmit = () => {
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/order_summary')
    }

  return (
    <Box display='flex' alignItems='center' justifyContent='center' margin='2rem auto'>
        <Box display='flex' flexDirection='column' alignItems='center'>
            <FormControl>
                <FormLabel color='info' sx={{fontSize:'1.5rem', mb:'1rem', color:'black'}}>Select a Payment Method</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={paymentMethod} onChange={handleChange}
                >
                    <Box display='flex' alignItems='center'>
                        <FormControlLabel value="Credit Card" control={<Radio color='secondary'/>} label="Credit Card" />
                        <CreditCardIcon/>
                    </Box>

                    <Box display='flex' alignItems='center'>
                        <FormControlLabel value="OnDelivery" control={<Radio color='secondary'/>} label="Pay on Delivery" />
                        <FaTruck/>
                    </Box>
                </RadioGroup>
            </FormControl>

            <Button 
                size='large' variant='contained'
                sx={{textTransform:'none', borderRadius:'25px', mt:'2.5rem', width:'200px'}}
                color='secondary' onClick={handleSubmit}
            >
                Proceed To Summary
            </Button>
        </Box>
    </Box>
  )
}

export default PaymentPage