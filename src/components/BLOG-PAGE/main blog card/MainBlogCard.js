import React from "react";
import MainBlogImage from "./MainBlogImage.js";
import BlogTitle from '../blog cards/BlogTitle.js';
import BlogText from '../blog cards/BlogText.js';


export default function  mainBlogCard() {
    return (
        <div className="mainBlogCard">
            <MainBlogImage />
            <BlogTitle />
            <BlogText />
        </div>
    )
}





