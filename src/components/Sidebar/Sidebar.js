import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyled ps-3">
                <li><Link className="text-decoration-none text-dark" to="/bookingList">Booking List</Link></li>
                <li><Link className="text-decoration-none text-dark" to="/addTestimonial">Review</Link></li>
                <li><Link className="text-decoration-none text-dark" to="/orderList">Order List</Link></li>
                <li><Link className="text-decoration-none text-dark" to="/addService">Add Service</Link></li>
                <li><Link className="text-decoration-none text-dark" to="/makeAdmin">Make Admin</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;