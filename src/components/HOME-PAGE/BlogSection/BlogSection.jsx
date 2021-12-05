import React from "react";
import { Link } from "react-router-dom";
// import BlogCard from "./BlogCard";

const BlogSection = (props) => {
    return ( <>
        <div className="BlogSection">
            <div className="HeaderBlog">
                <h2>Blog</h2>
            </div>
            <div className="BlogCardContainer">
                {/* <BlogCard
                    HomeBlogImage={"https://picsum.photos/300/350/?random=5"}
                    HomeBlogTitle={"Blog Title"}
                    HomeBlogDescription={
                        "Lorem ipsum dolor sit amet, an illum ceteros urbanitas vel, ex doming atomorum per. "
                    }
                />
                <BlogCard
                    HomeBlogImage={"https://picsum.photos/300/350/?random=6"}
                    HomeBlogTitle={"Blog Title"}
                    HomeBlogDescription={
                        "Lorem ipsum dolor sit amet, an illum ceteros urbanitas vel, ex doming atomorum per. "
                    }
                />
                <BlogCard
                    HomeBlogImage={"https://picsum.photos/300/350/?random=7"}
                    HomeBlogTitle={"Blog Title"}
                    HomeBlogDescription={
                        "Lorem ipsum dolor sit amet, an illum ceteros urbanitas vel, ex doming atomorum per. "
                    }
                /> */}
                {/* {props.articles.articles !== undefined ? props.articles.articles.slice(1, 2).map((article, index) =>
                    <div className="blogCard" key={index}>
                       
                        <img src={article.urlToImage} alt={article.title} width="400" />
                        <div className="blogContent">
                        <h3> <a href={article.url}>{article.title}</a></h3>
                    <p>{article.description}</p>
                    </div>
                    </div>
                ): <p>No blogs</p>} */}

                {props.npsData.data !== undefined ? props.npsData.data.slice(0, 1).map((nps, index) =>                
                    <div className="blogCard" key={index}>
                        <img src={nps.listingImage.url} alt={nps.listingImage.altText} width="400" />
                        <div className="blogContent">
                        <h3> <a href={nps.url}>{nps.title}</a></h3>
                            <p>{nps.listingDescription}</p>
                    </div>
                    </div>
                ): <p>No blogs</p>}
            </div>
            <Link to="/BlogPage"><button className="morePosts">More Posts</button></Link>
        </div>
        
    </>
    );
};

export default BlogSection;
