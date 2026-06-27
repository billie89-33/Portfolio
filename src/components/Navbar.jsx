import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-700 bg-gray-900 text-white">
      <div className="flex w-full flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="min-w-0">
          <NavLink to="/" className="block break-words font-mono text-sm font-semibold leading-6 sm:text-base xl:text-xl">
            <span className="text-[#569cd6]">const</span>{' '}
            <span className="text-[#4fc1ff]">portfolio</span>{' '}
            <span className="text-[#d4d4d4]">=</span>{' '}
            <span className="text-[#ffd700]">&#123;</span>{' '}
            <span className="text-[#9cdcfe]">role</span>
            <span className="text-[#d4d4d4]">:</span>{' '}
            <span className="text-[#ce9178]">&quot;software developer&quot;</span>
            <span className="text-[#d4d4d4]"> </span>
            <span className="text-[#ffd700]">&#125;</span>
            <span className="text-[#d4d4d4]">;</span>
          </NavLink>
        </div>

        <nav className="flex justify-center gap-6 text-sm sm:gap-8 sm:text-base lg:flex-1">
          <NavLink to="/" className={({isActive}) => `${isActive ? 'text-teal-300' : 'text-gray-300'} hover:text-teal-300`} end>Home</NavLink>
          <NavLink to="/about-me" className={({isActive}) => `${isActive ? 'text-teal-300' : 'text-gray-300'} hover:text-teal-300`}>About Me</NavLink>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-end">
          <a href="https://github.com/billie89-33" target="_blank" rel="noreferrer" className="text-sm hover:text-teal-300">Github</a>
        </div>
      </div>
    </header>
  )
}
