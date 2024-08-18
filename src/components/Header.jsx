import { Button,Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack, HStack, } from '@chakra-ui/react'
import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Header = () => {

const { isOpen, onOpen, onClose } = useDisclosure();

  return <>
  <Button
  pos={'fixed'}
  top={'4'}
  left={'4'}
  w={10}
  h={10}
  zIndex={'overlay'}
  borderRadius={'full'}
  colorScheme='green'
  p={'0'}
  onClick={onOpen}
  >
    <BiMenuAltLeft 
    size={'20'}
    />
  </Button>

  <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay />

    <DrawerContent>
        <DrawerCloseButton />

        <DrawerHeader>
            Navigate from here
        </DrawerHeader>
        <DrawerBody>
            <VStack alignItems={'flex-start'}>
            <Button onClick={onClose} variant={'ghost'} colorScheme='green'>
                <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='green'>
                <Link to={'/videos'}>Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='green'>
                <Link to={'/videos?category=free'}>Free Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='green'>
                <Link to={'/upload'}>Upload Doubts</Link>
            </Button>
            </VStack>
            <HStack position={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                <Button onClick={onClose} colorScheme='green'>
                    <Link to={'/login'}>Log In</Link>
                </Button>
                <Button onClick={onClose} colorScheme='green' variant={'outline'}>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
            </HStack>
        </DrawerBody>
    </DrawerContent>
    </Drawer>
  </> 
}

export default Header
