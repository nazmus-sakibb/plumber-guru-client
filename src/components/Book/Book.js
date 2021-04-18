import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Book.css';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])
    const selectedProduct = product.find(pd => pd._id === id);

    if (selectedProduct) {
        console.log(selectedProduct);
    }


    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <h4>Sidebar</h4>
                </div>
                <div className="col-md-9">
                    {selectedProduct && <div className="booking-card">
                        <h2>Book</h2>
                        <p><strong>Name:</strong> {loggedInUser.name}</p>
                        <p><strong>Email:</strong> {loggedInUser.email}</p>
                        <p><strong>Service Title:</strong> {selectedProduct.name}</p>

                        <br/>
                        
                        <div className="stripe-payment">
                            <h4 className="text-primary">Pay with Stripe</h4>
                            <ProcessPayment/>
                            <br/>
                            <button className="btn btn-primary">Pay</button>
                        </div>
                    </div>}
                </div>
            </div>




            
        </section>
    );
};

export default Checkout;