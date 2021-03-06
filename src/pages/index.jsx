import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard () {
  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <div>
      Email: {currentUser.email}
    </div>
  )
}
