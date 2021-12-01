import React from 'react';
import CompareHike from './CompareHike';
import CompareLabels from './CompareLabels';

const CompareTable = (props) => {
    return (
        <div className='CompareTable'>
            <CompareLabels />

            {props.compareQueue ? (
                props.compareQueue.map((hike, index) => (
                    <CompareHike
                        key={index}
                        setCompareQueue={props.setCompareQueue}
                        compareQueue={props.compareQueue}
                        currentHike={hike}
                    />
                ))
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default CompareTable;
