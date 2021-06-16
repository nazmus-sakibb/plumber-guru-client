import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddTestimonial = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        console.log(data);
        const serviceData = {
            name: data.name,
            cname: data.cname,
            description: data.description,
            imageURL: imageURL
        }
        const url = `https://vast-ravine-13356.herokuapp.com/addTestimonial`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server site response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '30bdc6aa96ae35f190c7f909052a48d0');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="container-dashboard">
            <div className="container-dash">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 container-box">
                        <h3>Add Testimonial</h3>
                        <br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <label htmlFor="name"><strong>Service Name: </strong></label> */}
                            <h5>Name: <input style={{ width: '300px' }} name="name" id="name" placeholder="Enter Your Name" ref={register} /></h5>
                            <br />
                            <h5>Company's Name & Designation: <input style={{ width: '300px' }} name="cname" placeholder="Company's Name, Designation" ref={register} /></h5>
                            <br /> <br />
                            {/* <label htmlFor="description"><strong>Service Description: </strong></label> */}
                            <h5>Your Feedback: <textarea cols="70" rows="5" name="description" id="description" placeholder="Enter Your Feedback" ref={register}></textarea></h5>
                            <br /> <br />
                            <label htmlFor="img"><strong>Add Photo</strong></label>
                            <input id="img" name="image" type="file" onChange={handleImageUpload} />
                            <br /> <br />
                            <input type="submit" value="Submit" className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTestimonial;