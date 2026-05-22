import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import AdminLayout from '../layouts/AdminLayout'
import HomePage from '../pages/user/HomePage'
import AboutMePage from '../pages/user/AboutMePage'
import DashboardPage from '../pages/admin/DashboardPage'
import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about-me', element: <AboutMePage /> },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute allowedRoles={[ 'admin' ]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
    ],
  },
  {
    path: '*',
    element: <UserLayout />,
  },
])

export default router
