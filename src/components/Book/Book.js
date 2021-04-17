import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
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
                        <h2 className="book-header">Book</h2>
                        <p><strong>Name:</strong> {loggedInUser.name}</p>
                        <p><strong>Email:</strong> {loggedInUser.email}</p>
                        <p><strong>Service Title:</strong> {selectedProduct.name}</p>
                        
                        <div className="stripe-payment">

                        </div>
                    </div>}
                </div>
            </div>




            {/* {selectedProduct && <table>
                <thead>
                    <tr className="thead">
                        <td>Descriptions</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{selectedProduct.name}</td>
                        <td>1</td>
                        <td>{selectedProduct.price}</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td></td>
                        <td><strong>{selectedProduct.price}</strong></td>
                    </tr>
                </tbody>
                <br/>
                <button className="btn btn-success button">Checkout</button>
            </table>} */}
        </section>
    );
};

export default Checkout;