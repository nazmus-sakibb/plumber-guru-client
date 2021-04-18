import React from 'react';

const BlogPost = (props) => {
    const { title, description, author, img, date } = props.blog;
    return (
        <div className="card shadow-sm col-md-4 col-sm-12">
            <div className="card-header d-flex  align-items-center">
                <div>
                    <img className="mx-3 img-fluid" src={img} alt="" width="250" />
                    <h6 className="text-primary">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>

        </div>
    );
};

export default BlogPost;