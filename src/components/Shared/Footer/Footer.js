import React from 'react';
import './Footer.css';
// import FooterCol from '../../Shared/FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <footer className="footer-area clear-both">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <h3><strong>PlumberGuru</strong></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tenetur corrupti aspernatur natus laudantium accusamus, voluptas maiores quas libero repudiandae! </p>
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 plumbing-services">
                    <h3>Plumbing Services</h3>
                    <ul>
                        <li><a href="#">Residential Plumbing Services</a></li>
                        <li><a href="#">Commercial Plumbing Services</a></li>
                        <li><a href="#">Drain Cleaning Services Sewer</a></li>
                        <li><a href="#">Replacement Services</a></li>
                        <li><a href="#">Garbage Disposal Services</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h3>Contact Info</h3>
                    <p><strong>Address:</strong> Patricia C. Amedee 4401 Waldeck Street. USA</p>
                    <p><strong>Phone:</strong> +00123 456 789</p>
                </div>
            </div>

            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} | All Rights Reserved</p>
            </div>

        </footer>

    );
};

export default Footer;