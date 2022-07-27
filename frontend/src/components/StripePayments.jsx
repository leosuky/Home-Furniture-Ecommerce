import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { payOrderAsync } from '../appStore/slices/PaymentSlice'
import { useDispatch } from 'react-redux'

function StripePayments({price, id}) {
    const dispatch = useDispatch()
    const priceForStripe = price * 100 // This is in Cents
    const pk_key = 'pk_test_51IzQ7hCVo6jJs87fAq6aFGQh2LdSXf3POf2bnuEiEy3tdypI9p5avmOFET2bGoDnGa9aeFrVObPah0QqMBgTYzbq00NksZ6RXw'

    const onToken = token => {
        dispatch(payOrderAsync(id, token))
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }
    
  return (
    <StripeCheckout
        label='Confirm Payment'
        name='Home Furniture Ltd'
        billingAddress
        shippingAddress
        image='../images/icon_logo.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={pk_key}
    />
  )
}

export default StripePayments