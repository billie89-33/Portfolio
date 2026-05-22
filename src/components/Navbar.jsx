import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Navbar() {
  const auth = useAuth()

  return (
    <header className="w-full bg-gray-900 text-white border-b border-gray-700">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="font-mono text-xl font-semibold">
            <span className="text-[#569cd6]">const</span>{' '}
            <span className="text-[#4fc1ff]">portfolio</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-[#ce9178]">&quot;software developer&quot;</span>
          </NavLink>
        </div>

        <nav className="flex-1 text-center flex gap-8 justify-center">
          <NavLink to="/" className={({isActive}) => `${isActive ? 'text-teal-300' : 'text-gray-300'} hover:text-teal-300`} end>Home</NavLink>
          <NavLink to="/about-me" className={({isActive}) => `${isActive ? 'text-teal-300' : 'text-gray-300'} hover:text-teal-300`}>About Me</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm hover:text-teal-300">Instagram</a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-sm hover:text-teal-300">Discord</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm hover:text-teal-300">Github</a>

          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-700">
            {auth?.isAdmin ? (
              <NavLink to="/admin" className="px-3 py-1 bg-gray-800 rounded text-sm hover:bg-gray-700">Admin</NavLink>
            ) : null}

            <button
              onClick={() => auth?.toggleAdmin && auth.toggleAdmin()}
              className="px-3 py-1 bg-teal-500 text-white rounded text-sm hover:bg-teal-600"
              title="Toggle admin (dev)"
            >
              {auth?.isAdmin ? 'User' : 'Admin'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
