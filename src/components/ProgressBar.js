"use client";
import React from 'react';

const ProgressBar = ({ percentage, color, milestoneName }) => {
    const containerStyles = {
        height: '20px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '50px',
        margin: '30px 0'
    };

    const fillerStyles = {
        height: '100%',
        width: `${percentage}%`,
        backgroundColor: `${color}`,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 2s ease-in'

    };

    const labelStyles = {
        padding: '5px',
        color: 'white',
        
    };

    return (
        <div style={containerStyles} className='rounded-full'>
            <div className='' style={fillerStyles}>
                <span  style={labelStyles}></span>
            </div>
            <div className='flex justify-between px-2 py-1 '>
                <span className='text-sm md:text-lg text-gray-500'>{milestoneName}</span>
                <span className='text-sm md:text-lg text-gray-500'>{`${percentage}% Completed`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
