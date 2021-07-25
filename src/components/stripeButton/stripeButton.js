import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JBQxmAzr0QtA3ZJycpc3IgQ5ZpplzjG0gyrppaj80vYeIkeficaFDT40Tq30iCmhkJHpAbijBwdjxg8aK248TzZ00bv5zIahw'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
         label= 'Pay Now'
         name=' KING clothing'
         billingAddress
         shippingAddress
         description={`Your Total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;