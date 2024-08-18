import { Button, Container, Heading, Input, VStack, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <Container w={'full'} h={'100vh'} p={'16'}>
         <form>
            <VStack 
            w={'97'}
            alignItems={'stretch'}
            spacing={'5'}
            margin={'auto'}
            paddingY={'16'}
            >
            <Heading textTransform={'uppercase'}>Creats you account</Heading>
            <Avatar alignSelf={'center'} boxSize={'20'}/>
            <Text>
            Already a Edustreamer?{' '}
            <Text as={'span'} color={'green'}>
              <Link to={'/login'}>
                Login to EduStream
              </Link>
            </Text>
          </Text>
          <Input 
            type={'text'}
            placeholder={'Your name'}
            required
            focusBorderColor={'green.600'}
            />
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
            <Button type='submit' colorScheme='green'>Sign up</Button>
            </VStack>
        </form>

    </Container>
  )
}

export default Signup
