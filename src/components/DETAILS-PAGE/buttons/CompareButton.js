const CompareButton = (props) => {
    const handleAddCompare = () => {
        let currentQueue = props.compareQueue;
        let newQueue = currentQueue;
        // //Check That 4 max
        // //Check that is not repeated
        console.log(currentQueue);

        newQueue.push(props.place);

        props.setCompareQueue(newQueue);

        console.log(currentQueue);
        console.log(newQueue);
    };

    return (
        <div className="compareHikeBtn">
            <button
                className="compareButton"
                onClick={() => handleAddCompare()}
            >
                Add to Hike Compare!
            </button>
        </div>
    );
};

export default CompareButton;
