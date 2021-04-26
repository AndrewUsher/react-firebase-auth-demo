import React from 'react'
import { Navigate, Route } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export function ProtectedRoute ({ path, element: Element }) {
  const { currentUser } = useAuth()
  return (
    <Route
      path={path}
      element={currentUser ? <Element /> : <Navigate to="signup" replace />}
    />
  )
}
