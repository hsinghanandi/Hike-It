import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// import MainBlogCard from "./main blog card/MainBlogCard";
// import BlogCard from "./blog cards/BlogCard";

const BlogPage = () => {
    // const [articles, setArticles] = useState([]);
    // const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

    // useEffect(() => {
    //     axios.get(`https://newsapi.org/v2/everything?apiKey=${newsApiKey}&q=+hiking+trails+canada`)
    //         .then(result => {
    //             setArticles(result.data);
    //             console.log("setBlogPosts", result.data);
    //         })
    //         .catch(error => { console.log(error) });
    // }, []);

    // NPS API
    const [npsData, setNpsData] = useState([]);
    const npsApiKey = process.env.REACT_APP_NPS_API_KEY;

    useEffect(() => {
        axios
            .get(
                `https://developer.nps.gov/api/v1/articles?api_key=${npsApiKey}&q=hike`
            )
            .then((result) => {
                setNpsData(result.data);
                console.log('setNpsData', result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className='blogPage'>
                {/* < MainBlogCard /> */}
                <h1>Blog</h1>

                <div className='blogCards'>
                    {npsData.data !== undefined ? (
                        npsData.data.slice(0, 6).map((nps, index) => (
                            <div className='blogCardChild' key={index}>
                                <img
                                    src={nps.listingImage.url}
                                    alt={nps.listingImage.altText}
                                    width='400'
                                />
                                <h3 className='blogTitle'>{nps.title}</h3>
                                <div className='blogContent'>
                                    <h3>
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

                {/* <div className="blogCards">

                    {articles.articles !== undefined ? articles.articles.map((article, index) =>
                        <div className="blogCard" key={index}>

                            <img src={article.urlToImage} alt={article.title} width="400" />
                            <div className="blogContent">
                                <h3> <a href={article.url}>{article.title}</a></h3>
                                <p>{article.description}</p>
                            </div>
                        </div>
                    ) : <p>No blogs</p>}
            </div> */}


            </div>
        </>
    );
};

export default BlogPage;
