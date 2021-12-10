import React from 'react';

const CompareToggle = (props) => {
    const handleChangeToggle = (event) => {
        props.setGraphToggle(event.target.checked);
    };

    return (
        <div className='compare-toggle'>
                <input
                className='compare-toggle-checkbox'
                    type='checkbox'
                    onChange={(event) => {
                        handleChangeToggle(event);
                    }}
                    defaultChecked='false'
                />
                <label className='compare-toggle-label'>
                <span className="compare-toggle-span">Table</span>
                </label>
           
        </div>
    );
};

export default CompareToggle;
