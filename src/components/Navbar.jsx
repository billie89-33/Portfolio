import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Navbar() {
  const auth = useAuth()

  return (
    <header className="w-full bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="text-2xl font-bold text-teal-300">&lt;C/&gt; Portfolio</NavLink>
        </div>

        <nav className="flex-1 text-center">
          <NavLink to="/" className={({isActive}) => `mx-4 ${isActive ? 'text-teal-300' : 'text-white'}`} end>Home</NavLink>
          <NavLink to="/blog" className={({isActive}) => `mx-4 ${isActive ? 'text-teal-300' : 'text-white'}`}>Blog</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm">Instagram</a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-sm">Discord</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm">Github</a>

          <div className="flex items-center gap-2">
            {auth?.isAdmin ? (
              <NavLink to="/admin" className="px-3 py-1 bg-gray-800 rounded">Admin</NavLink>
            ) : null}

            <button
              onClick={() => auth?.toggleAdmin && auth.toggleAdmin()}
              className="px-3 py-1 bg-teal-500 text-white rounded"
              title="Toggle admin (dev)"
            >
              {auth?.isAdmin ? 'Switch to User' : 'Switch to Admin'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
