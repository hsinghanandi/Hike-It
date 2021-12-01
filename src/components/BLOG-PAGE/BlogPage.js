import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// import MainBlogCard from "./main blog card/MainBlogCard";
// import BlogCard from "./blog cards/BlogCard";

const BlogPage = ()=>{

    const [articles, setArticles] = useState([]);
    const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?apiKey=${newsApiKey}&q=+hiking+trails+canada`)
            .then(result => {
                setArticles(result.data);
                console.log("setBlogPosts", result.data);
            })
            .catch(error => { console.log(error) });
    }, []);

    return (

    <>
        <div className ="blogPage">
            {/* < MainBlogCard /> */}
                <h1>Blog</h1>

            <div className="blogCards">

                    {articles.articles !== undefined ? articles.articles.map((article, index) =>
                        <div className="blogCard" key={index}>

                            <img src={article.urlToImage} alt={article.title} width="400" />
                            <div className="blogContent">
                                <h3> <a href={article.url}>{article.title}</a></h3>
                                <p>{article.description}</p>
                            </div>
                        </div>
                    ) : <p>No blogs</p>}
            </div>
        </div>

    </>
    )
    
}

export default BlogPage;

