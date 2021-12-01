import React from "react";
import NewsCards from "./NewsCard";


class News extends React.Component {
    render() {
        return (
            <div className="news">
                <h2 className="detailsHeading">Latest News</h2>
                < NewsCards />
            </div>
        )
    }
}

export default News;