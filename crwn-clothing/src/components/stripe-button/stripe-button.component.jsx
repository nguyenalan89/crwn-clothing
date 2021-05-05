import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HmojOCxWPpe3p9RvMOwcBn2A3Agq7RaQoqfIDPnWoPkq4nb8TaYdpwifszypTgQNxkT3oHAduOA9sovv7eZva7X00MVy2aFk8'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }


    return (
       <StripeCheckout
       label='Pay Now'
       name='CRWN Clothing Ltd.'
       billingAddress
       shippingAddress
       image='https://svgshare.com/i/CUz.svg'
       description={`Your total is $${price}`}
       amount={priceForStripe}
       panelLabel='Pay Now'
       token={onToken}
       stripeKey={publishableKey}
       />

       
    )
}
export default StripeCheckoutButton