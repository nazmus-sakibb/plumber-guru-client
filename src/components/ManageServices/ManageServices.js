import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-9">
                <h2>Manage Services</h2>
            </div>
        </div>
    );
};

export default ManageServices;