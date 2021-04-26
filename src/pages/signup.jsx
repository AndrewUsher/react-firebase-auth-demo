import React, { useRef, useState } from 'react'
import { Alert, AlertIcon, Button, Container, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Signup () {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { signup } = useAuth()
  const navigate = useNavigate()
  console.log(error)
  const handleSubmit = async () => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords must match')
    }

    try {
      setError(null)
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      setLoading(false)
      navigate('../')
    } catch {
      setLoading(false)
      setError('Error while signing up for an account')
    }
  }
  return (
    <>
      <Container maxWidth="md">
        <Heading size="lg" py={4} textAlign="center">Sign Up</Heading>
        {error && (
          <Alert status="error" mb={2}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" ref={emailRef} />
        </FormControl>
        <FormControl id="password" mb={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" ref={passwordRef} />
        </FormControl>
        <FormControl id="confirmPassword" mb={4} isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" ref={confirmPasswordRef} />
        </FormControl>
        <Button disabled={loading} colorScheme="orange" isFullWidth mb={4} onClick={handleSubmit}>Sign Up</Button>
        <Text py={4} borderTop="1px solid #f2f2f2" textAlign="center">Already have an account? Log In</Text>
      </Container>
    </>
  )
}
