import React, { useEffect, useState } from 'react';
import OrderDetail from '../OrderDetail/OrderDetail';
import Sidebar from '../Sidebar/Sidebar';


const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://vast-ravine-13356.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="container-dashboard">
            <div className="container-dash">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 container-box">
                        <div>
                            <h2>Order List</h2>
                        </div>
                        <div className="row pt-5">
                            {
                                orders.map(order => <OrderDetail order={order} id={order._id}></OrderDetail>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;