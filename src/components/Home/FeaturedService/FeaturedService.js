import React from 'react';
import featured from '../../../images/featured.jpg'
import featuredTwo from '../../../images/featured-2.jpg'
import './FeaturedService.css';


const FeaturedService = () => {
    return (
        <section className="features-service pb-0 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <div>
                            <img className="img-fluid" src={featured} alt="" />
                        </div>
                        <div>
                            <img style={{height: '250px', width: '100%'}} className="img-fluid" src={featuredTwo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h4>Who we are</h4>
                        <h1>An Experienced Team of Skilled Professional</h1>
                        <p className="text-secondary my-5">
                            The best choice for professional plumbing services enim aliquam, condim entum nisl laoreet lectus. Aliquam convallis sed elit nec vehicula. Praesent gravida massa sit amet ullam corper fringilla. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Aliquam convallis sed elit nec vehicula. Praesent gravida massa sit amet ullam corper fringilla. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.

                            The best choice for professional plumbing services enim aliquam, condim entum nisl laoreet lectus.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;