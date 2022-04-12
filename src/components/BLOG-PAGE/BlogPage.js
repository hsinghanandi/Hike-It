import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPage = () => {
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
            })
            .catch((error) => {
                console.log(error);
            });
    }, [npsApiKey]);

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
                                        <a href={nps.url} target='_blank' rel='noreferrer'>
                                            {nps.title}
                                        </a>
                                    </h3>
                                    <p>{nps.listingDescription}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No blogs</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogPage;
