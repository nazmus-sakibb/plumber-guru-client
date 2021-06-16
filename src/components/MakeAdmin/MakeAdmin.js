import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="container-dashboard">
            <div className="container-dash">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 container-box">
                        <h3>Make Admin</h3>
                        <br />
                        <form action="#">
                            <h6>Email</h6>
                            <div className="d-flex justify-content-start">
                                <input type="email" placeholder="kevin@gmail.com" className="form-control w-25" />
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;