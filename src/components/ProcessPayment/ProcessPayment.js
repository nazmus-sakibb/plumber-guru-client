import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie4NrJMQpVIScMWQOQxo7iKJMzD8WOsGP41b1b1wZRlORmBiq7tACWgeTeaCt7Fe6xe5eNFOOPShTg0vO3Rvtm4009zoYXlkq');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm/>
        </Elements>
    );
};

export default ProcessPayment;