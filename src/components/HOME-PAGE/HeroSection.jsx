import React from "react";

const HeroSection = (props) => {
    return (
        <div className="heroImage">
            <div className="heroContent">
                {props.isLoggedIn && (
                    <h1 className="heroTitle">
                        Hi, {props.userName.toUpperCase()}
                    </h1>
                )}
                <h1 className="heroTitle">Hike It! You'll Like It!</h1>

                <form onSubmit={(event) => props.submitSearch(event)}>
                    <input
                        className="searchBar"
                        type="text"
                        name="search"
                        placeholder="Search Trails, Routes, Mountains, Lakes..."
                        defaultValue={props.search || ""}
                        onChange={(event) => props.handleChangeSearch(event)}
                    />
                </form>

                <p>No Idea? Looking for a good place to explore?</p>
                <button onClick={(event) => props.randomizeSearch(event)}>Randomize</button>
            </div>
        </div>
    );
};

export default HeroSection;
