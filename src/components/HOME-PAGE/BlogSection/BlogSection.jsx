import React from "react";
import { Link } from "react-router-dom";
// import BlogCard from "./BlogCard";

const BlogSection = (props) => {

    const button = {
        background: '#00291F',
    }

    return (
        <>
            <div className="BlogSection">
                <div className="HeaderBlog">
                    <h2>Blog</h2>
                </div>
                <div className="BlogCardContainer">
                    {props.npsData.data !== undefined ? (
                        props.npsData.data.slice(0, 1).map((nps, index) => (
                            <div className="blogCard" key={index}>
                                <img
                                    src={nps.listingImage.url}
                                    alt={nps.listingImage.altText}
                                    width="400"
                                />
                                <div className="blogContent">
                                    <h3>
                                        {" "}
                                        <a href={nps.url}>{nps.title}</a>
                                    </h3>
                                    <p>{nps.listingDescription}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No blogs</p>
                    )}
                </div>

                <div className="ButtonBlog">
                    <Link to={"./BlogPage"}>
                        <button style={button}>
                            More Posts
                        </button> 
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogSection;
