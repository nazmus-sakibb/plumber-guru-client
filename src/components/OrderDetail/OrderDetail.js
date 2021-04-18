import React from 'react';
import './OrderDetail.css';

const OrderDetail = ({ order }) => {
    return (
        <div className="col-md-5 col-sm-12 bookingDetail-card me-4 mb-4">
            <div className="d-flex justify-content-between">
                <div>
                    <img className="img-fluid" style={{ height: '100px' }} src={order.imageURL} alt="" />
                </div>
                <div>
                    <button className="btn btn-primary">Pending</button>
                </div>
            </div>
            <h4 style={{ color: '#585858' }} className="my-3">{order.name}</h4>
            <p className="text-secondary">{order.description}</p>
        </div>
    );
};

export default OrderDetail;