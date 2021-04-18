import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
import './Book.css';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://vast-ravine-13356.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])
    const selectedService = product.find(pd => pd._id === id);

    if (selectedService) {
        console.log(selectedService);
    }

    
    const handlePayment = (selectedService) => {
        console.log(selectedService);
        // const serviceData = {
        //     name: selectedService.name,
        //     description: selectedService.description,
        //     imageURL: selectedService.imageURL
        // }
        const url = `https://vast-ravine-13356.herokuapp.com/bookingList`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedService)
        })
        .then(res => console.log('server site response', res))
    }


    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-md-9">
                    {selectedService && <div className="booking-card">
                        <h2>Book</h2>
                        <p><strong>Name:</strong> {loggedInUser.name}</p>
                        <p><strong>Email:</strong> {loggedInUser.email}</p>
                        <p><strong>Service Title:</strong> {selectedService.name}</p>

                        <br/>
                        
                        <div className="stripe-payment">
                            <h4 className="text-primary">Pay with Stripe</h4>
                            <ProcessPayment/>
                            <br/>
                            <span>Your Service Charged will be <strong>$999</strong> </span>
                            <button className="btn btn-primary" onClick={() => handlePayment(selectedService)}>Pay</button>
                        </div>
                    </div>}
                </div>
            </div>




            
        </section>
    );
};

export default Checkout;