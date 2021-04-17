import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import blogOne from '../../../images/blog-1.jpg';
import blogTwo from '../../../images/blog-2.jpg';
import blogThree from '../../../images/blog-3.jpg';
import './Blogs.css'


const blogData = [
    {
        title : 'Top 5 things you should know about your plumbing',
        description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a of classical Latin literature...',
        author:'Ema Watson',
        img : blogOne,
        date : '23 june 2021'
    },
    {
        title : 'Finding the Best Solutions to Plumbing Problems',
        description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a of classical Latin literature...',
        author:'Kristen Stewart',
        img : blogTwo,
        date : '28 May 2020'
    },
    {
        title : 'When you have a problem with Cracked Pipes',
        description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a of classical Latin literature...',
        author:'Ema Stone',
        img : blogThree,
        date : '30 March 2020'
    }
]

const Blogs = () => {
    return (
       <section style={{backgroundColor: '#dfe6e9'}} className="blogs py-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">News and Updates</h5>
                    <h1>Latest From Blog</h1>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;