import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><strong>PlumberGuru</strong></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-5">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link" href="#">Admin</a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link" href="#"><strong>{loggedInUser.name}</strong></a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;