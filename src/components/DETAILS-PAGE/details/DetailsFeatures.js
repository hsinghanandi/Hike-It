const DetailsFeatures = (props) => {
    return (
        <div className="detailsFeatures">
            <div className="detailsHeading">Features</div>
            <div className="detailsContent">
                <div className="detailsDesc">
                    <p>
                        HikeIt is a data-driven web platform that helps hiking
                        enthusiasts and outdoor adventurers plan their hikes by
                        providing them with the tools to discover, search and
                        compare different hiking trails.
                    </p>
                </div>
                <ul>
                    <li>Address: {props.address}</li>
                    <li>
                        {props.status ? "Currently open" : "Currently closed"}
                    </li>
                    <li>{props.phoneNumber}</li>
                    <li>Rating: {props.rating}</li>
                    <li>
                        {props.types.length > 0 &&
                            props.types.map((type, index) => (
                                <div key={index}>{type}</div>
                            ))}
                    </li>
                    <li>{props.website}</li>
                    <li>{props.openingDays}</li>
                </ul>
            </div>
        </div>
    );
};

export default DetailsFeatures;
