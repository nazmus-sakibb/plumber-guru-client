import React from 'react';
import plumber from '../../../images/plumber-header.jpg';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 col-sm-12">
                <h1 style={{color: '#203047'}}>We Are Available to Emergency Plumbing</h1>
                <p className="text-secondary">Our highly trained and skilled plumbers offer a full range of services for residential plumbing and commercial plumbing. aute irure dolor in reprehenderit in voluptate velit.Need assistance doloreaperiam.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 col-sm-12">
                <img src={plumber} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;