"use client";
import React from 'react';

const ProgressBar = ({ percentage, color, milestoneName }) => {
    const containerStyles = {
        height: '30px',
        width: '100%',
        // backgroundColor: 'gray',
        borderRadius: '50px',
        margin: '20px 0'
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
    <>
        <div className='flex justify-between px-2 '>
            <span className='text-sm md:text-lg text-slate-200'>{milestoneName}</span>
            <span className='text-sm md:text-lg text-slate-200'>{`${percentage}% Completed`}</span>
        </div>
        <div style={containerStyles} className=' border border-slate-500 border-dashed'>
            
            <div className='ease-in' style={fillerStyles}>
                <span  style={labelStyles}></span>
            </div>
           
        </div>
        
    </>
    );
};

export default ProgressBar;
