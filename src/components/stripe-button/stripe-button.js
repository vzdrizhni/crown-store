import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HyIbSBA1aGyXpDFGxPD4JhFuXY2yccGuWDbx9TXyMu7CvREnG6as27ubcvjEQ1ofRMKqS93W8nW3ZOQlsFbaUzl00Z35cuhWc';
    const onToken = (token) => {
        console.log(token);
        alert('Paymen Successfull')
    }
    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name='Vzdrizhni Ltd.'
                billingAddress
                shippingAddress
                image='https://sendeyo.com/up/d/f3eb2117da'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton
