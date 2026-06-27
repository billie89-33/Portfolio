import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import AboutMePage from '../pages/AboutMePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about-me', element: <AboutMePage /> },
    ],
  },
  {
    path: '*',
    element: <MainLayout />,
  },
])

export default router
