import React from 'react';
import './BookingDetail.css';

const BookingDetail = ({ booking }) => {
    return (
        <div className="col-md-6 col-sm-12 bookingDetail-card">
            <div>
                <img className="img-fluid" style={{ height: '100px' }} src={booking.imageURL} alt="" />
                <button className="btn btn-primary float-right">Pending</button>
            </div>
            <h4 style={{ color: '#585858' }} className="my-3">{booking.name}</h4>
            <p className="text-secondary">{booking.description}</p>
        </div>
    );
};

export default BookingDetail;