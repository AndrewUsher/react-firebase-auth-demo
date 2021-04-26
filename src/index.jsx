/* Add JavaScript code here! */
import React from 'react'
import { render } from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Signup from './pages/signup'
import { ProtectedRoute } from './components/ProtectedRoute'
import Dashboard from './pages'

render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <ProtectedRoute path="/" element={Dashboard} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
