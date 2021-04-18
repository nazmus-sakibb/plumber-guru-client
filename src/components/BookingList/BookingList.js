import React, { useEffect, useState } from 'react';
import BookingDetail from '../BookingDetail/BookingDetail';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://vast-ravine-13356.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <div>
                    <h2>Booking List</h2>
                </div>
                <div className="d-flex justify-content-center ">
                    <div className="row w-75 pt-5">
                        {
                            bookings.map(booking => <BookingDetail booking={booking} id={booking._id}></BookingDetail>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;