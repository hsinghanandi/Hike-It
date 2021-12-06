import React from 'react';

import HeroSection from './HeroSection';
import PopularHikes from './PopularHikesSection/PopularHikes';
import FeatureSection from './FeaturesSection/FeaturesSection';
import BlogSection from './BlogSection/BlogSection';
import AboutSection from './AboutHomeSection/AboutSection';

export default function HomePage(props) {
    return (
        <div className='homePage'>
            <HeroSection
                isLoggedIn={props.isLoggedIn}
                userName={props.userName}
                setSearch={props.setSearch}
                search={props.search}
                handleChangeSearch={props.handleChangeSearch}
                submitSearch={props.submitSearch}
                searchResults={props.searchResults}
                setSearchResults={props.setSearchResults}
            />
            <FeatureSection />
            <PopularHikes />
            <BlogSection npsData={props.npsData} />
            <AboutSection />
        </div>
    );
}
