import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({service, id}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '200px'}} src={service.imageURL} alt=""/>
            <h4 style={{color: '#585858'}} className="my-3">{service.name}</h4>
            <p className="text-secondary">{service.description}</p>
            <Link to={`/book/${id}`}><button className="btn btn-primary text-white text-decoration-none">Book Now</button></Link>
            
        </div>
    );
};

export default ServiceDetail;