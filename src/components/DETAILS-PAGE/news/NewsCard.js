import React from "react";
import NewsTitle from "./NewsTitle";
import NewsText from "./NewsText";

class NewsCards extends React.Component  {
    render() {
        return (
            <div className="newsCards">

                <div className="card">
                    < NewsTitle />
                    < NewsText />
                </div>
                <div className="card">
                    < NewsTitle />
                    < NewsText />
                </div>
                <div className="card">
                    < NewsTitle />
                    < NewsText />
                </div>
                
            </div>
            
        )
    }
}
export default NewsCards;