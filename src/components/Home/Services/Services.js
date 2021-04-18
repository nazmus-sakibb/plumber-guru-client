import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <section className="services-container">
            <div className="text-center">
                <h2>OUR SERVICES</h2>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="row w-75 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service} id={service._id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;