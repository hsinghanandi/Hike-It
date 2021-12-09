import React from 'react';
import logo from "../../../src/assets/footer-logo.png"; 
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (

        <div className = 'footer-wrap'>
            <div className='footer'>

            <div className ="quick-links">
                <h3>Quick Links </h3>
                <br/>
                <li>
                    <Link to ="/ComparePage">
                    
                    Hike Comparison

                    </Link>
                </li>

                <li>
                    
                    <Link to ="/BlogPage">
                    
                    Blog & News

                    </Link>
                
                </li>
                <li>
                    
                    <Link to ="/SavedHikes">
                    Saved Hikes
                    </Link>
                
                </li>
            </div>

            <div className ="HikeIt-logo">

                <Link to ="/">

                <img src ={logo} className ="footer-logo" alt="logo" /> 

                </Link>

                <p>©HikeIt 2021. All Rights Reserved.</p>

            </div>

            <div className ="blog-news">
                <h3>Blog & News </h3>
                <br/>
                <li>
                    <Link to ="/BlogPage">
                        Latest Articles
                    </Link>
                    
                </li>


                <li>
                    
                    <Link to ="/BlogPage">
                            Recent News
                    </Link>
                    
                    
                </li>
            </div>

            </div>
        
        </div>
    );
};

export default Footer;
