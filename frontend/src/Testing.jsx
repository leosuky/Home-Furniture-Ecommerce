import React from 'react'
import { createTheme, responsiveFontSizes, ThemeProvider, } from "@mui/material/styles";
import { Typography, Box, Snackbar, Alert, Slide, Button } from '@mui/material';
let theme = createTheme()
theme = responsiveFontSizes(theme)


function Testing() {
  const [open, setOpen] = React.useState(true)

  const handleClose =() => {
    setOpen(false)
  }
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
            <Typography variant='h1'>The quick Brown fox jumped over lalala</Typography>
            <Typography variant='h3'>The quick Brown fox jumped over lalala</Typography>
            <Typography variant='h5'>The quick Brown fox jumped over lalala</Typography>
            <Typography variant='p'>The quick Brown fox jumped over lalala</Typography> {/* THIS IS A <SPAN> */}
            <Typography variant='body1'>The quick Brown fox jumped over lalala</Typography> {/* THIS IS A <P> */}
            <Typography variant='subtitle1'>The quick Brown fox jumped over lalala</Typography> {/* THIS IS A <H6> */}
            <Button variant='contained' onClick={()=>setOpen(true)}>CLLICK ME BRO</Button>

            <Snackbar 
              open={open} onClose={handleClose}
              anchorOrigin={{vertical:'top', horizontal:'center'}}
              TransitionComponent={Slide}
              autoHideDuration={5000}
            >
              <Alert severity="error" variant='filled' sx={{width:'100%'}} onClose={handleClose}>
                This is an error
              </Alert>
            </Snackbar>
        </Box>
    </ThemeProvider>
  )
}

// import React from 'react';
// import {loadStripe} from '@stripe/stripe-js';
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (elements == null) {
//       return;
//     }

//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe || !elements}>
//         Pay
//       </button>
//     </form>
//   );
// };

// const stripePromise = loadStripe('pk_test_51IzQ7hCVo6jJs87fAq6aFGQh2LdSXf3POf2bnuEiEy3tdypI9p5avmOFET2bGoDnGa9aeFrVObPah0QqMBgTYzbq00NksZ6RXw');

// const Testing = () => (
//   <Elements stripe={stripePromise}>
//     <CheckoutForm />
//   </Elements>
// );


export default Testing