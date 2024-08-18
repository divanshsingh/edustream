import { Button, Container, Heading, Input, VStack, Text, } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (

    <Container w={'full'} h={'100vh'} p={'16'}>

        <form>
            <VStack 
            w={'96'}
            alignItems={'stretch'}
            spacing={'5'}
            margin={'auto'}
            paddingY={'16'}
            >
            <Heading textTransform={'uppercase'}>Welcome back!</Heading>
            <Text>
            New learner?{' '}
            <Text as={'span'} color={'green'}>
              <Link to={'/signup'}>
                Join EduStream
              </Link>
            </Text>
          </Text>
            <Input 
            type={'email' }
            placeholder={'Email'}
            required
            focusBorderColor={'green.600'}
            />
            <Input 
            type={'password' }
            placeholder={'Password' }
            required
            focusBorderColor={'green.600'}
            />
            <Button type='submit' colorScheme='green'>Log in</Button>
            <Text textAlign={'center'} color={'green'} cursor={'pointer'}>Forgot your password?</Text>
            </VStack>
        </form>

    </Container>
  )
}

export default Login
