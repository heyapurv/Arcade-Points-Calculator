"use client"

import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="border-b border-gray-600 bg-transparent backdrop-blur-md bg-opacity-60 sticky top-0 z-10 w-full">
            <div className="container mx-auto flex h-16 items-center justify-center gap-40 px-4">
                <div className='flex gap-4 text-left text-xl md:text-2xl font-bold hover:border border-gray-700 rounded-md px-2 py-1 hover:scale-105 duration-200 hover:shadow-2xl hover:shadow-cyan-200 hover:bg-transparent hover:backdrop:blur-sm'>
                    <Link href="https://arcade-facilitator.vercel.app/" className='text-cyan-400'>Home</Link>
                </div>
                <div className='flex gap-4 text-left text-xl md:text-2xl font-bold hover:border border-gray-700 rounded-md px-2 py-1 hover:scale-105 duration-200  hover:shadow-2xl hover:shadow-cyan-200'>
                    <Link href="https://arcade-facilitator.vercel.app/skillbadges" className='text-cyan-400'>Skill Badges</Link>
                </div>
                <div className='flex gap-4 text-left text-xl md:text-2xl font-bold hover:border border-gray-700 rounded-md px-2 py-1 hover:scale-105 duration-200 hover:shadow-2xl hover:shadow-cyan-200'>
                    <Link href="https://arcade-facilitator.vercel.app/dashboard" className='text-cyan-400'>Progress Board</Link>
                </div>
                <div className='flex gap-4 text-left text-xl md:text-2xl font-bold hover:border border-gray-700 rounded-md px-2 py-1 hover:scale-105 duration-200 hover:shadow-2xl hover:shadow-cyan-200'>
                    <Link href="https://arcade-facilitator.vercel.app/games" className='text-cyan-400'>Games</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
