import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      return localStorage.getItem('isAdmin') === 'true'
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false')
    } catch (e) {
      // ignore
    }
  }, [isAdmin])

  const user = {
    role: isAdmin ? 'admin' : 'user',
    email: isAdmin ? 'admin@portfolio.local' : 'guest@portfolio.local',
  }

  const toggleAdmin = () => setIsAdmin((v) => !v)

  return (
    <AuthContext.Provider value={{ user, isAdmin, toggleAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
