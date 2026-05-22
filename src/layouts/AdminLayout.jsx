import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function AdminLayout() {
  const auth = useAuth()

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="w-full bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <NavLink to="/admin" className="text-xl font-bold">Admin Panel</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm">Signed in as <strong>{auth?.user?.email}</strong></span>
            <NavLink to="/" className="px-3 py-1 bg-teal-500 rounded text-white">Go to Site</NavLink>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <Outlet />
      </div>
    </div>
  )
}
