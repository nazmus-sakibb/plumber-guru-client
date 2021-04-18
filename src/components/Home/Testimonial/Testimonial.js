import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faInstagram, faGooglePlusG } from '@fortawesome/free-solid-svg-icons';

const Testimonial = ({testimonial}) => {
    return (
        <div className="card shadow-sm col-md-4 col-sm-12">
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={testimonial.imageURL} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{testimonial.name}</h6>
                    <p className="m-0">{testimonial.cname}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{testimonial.description}</p>
                <a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faStar} /></a>
                <a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faStar} /></a>
                <a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faStar} /></a>
                <a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faStar} /></a>
                <a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faStar} /></a>
            </div>
       </div>
    );
};

export default Testimonial;