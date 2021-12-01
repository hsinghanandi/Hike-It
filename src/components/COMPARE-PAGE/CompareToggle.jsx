import React from 'react';

const CompareToggle = (props) => {
    const handleChangeToggle = (event) => {
        props.setGraphToggle(event.target.checked);
    };

    return (
        <div className='toggle-switch'>
            <label className='switch'>
                <input
                    type='checkbox'
                    onChange={(event) => {
                        handleChangeToggle(event);
                    }}
                    defaultChecked='false'
                />
                Table - Graph
                <span className='slider round'></span>
            </label>
        </div>
    );
};

export default CompareToggle;
