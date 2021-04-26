import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { firebaseAuth } from '../firebase'

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [authStateLoading, setAuthStateLoading] = useState(true)
  const signup = useCallback((email, password) => {
    return firebaseAuth.createUserWithEmailAndPassword(email, password)
  }, [])

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setAuthStateLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {!authStateLoading && children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
