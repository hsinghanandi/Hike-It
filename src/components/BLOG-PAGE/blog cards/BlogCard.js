import React from "react";
import BlogImage from './BlogImage.js';
import BlogTitle from './BlogTitle.js';
import BlogText from './BlogText.js';


export default function  BlogCard() {
    return (
        <div className="BlogCard">
            <BlogImage />
            <BlogTitle />
            <BlogText />
        </div>
    )
}





