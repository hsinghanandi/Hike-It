import React from 'react';

const HeroSection = (props) => {
    return (
        <div className='heroImage'>
            <div className='heroContent'>
                <h1 className='heroTitle'>Hike It! You'll Like It!</h1>

                <form onSubmit={(event) => props.submitSearch(event)}>
                    <input
                        className='searchBar'
                        type='text'
                        name='search'
                        defaultValue={props.search || ''}
                        onChange={(event) => props.handleChangeSearch(event)}
                    />

                    {/* <button className="searchBtn">Search
                    </button> */}
                </form>
                <p>No Idea? Looking for a good place to explore?</p>
                <button className='heroButton'>Randomize</button>
                {/*  */}
                {console.log('searchResults ', props.searchResults)}
            </div>
        </div>
    );
};

export default HeroSection;
