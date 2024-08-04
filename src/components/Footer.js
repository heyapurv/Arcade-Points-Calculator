import Link from 'next/link';
import React from 'react'


const Footer = () => {
    return (
        <footer className="bg-slate-950  text-white">
            
            <div className="container mx-auto px-4 flex flex-col items-center justify-center  p-4">
               <p className='text-center'>Made with ❤️ by <a href="https://www.linkedin.com/in/apurvsprofile/" className=  'hover:scale-105 text-cyan-400 duration-200'>Apurv Gore</a></p>
               
            </div>
        </footer>
    )
}

export default Footer