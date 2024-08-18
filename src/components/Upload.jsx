import { Container, HStack, VStack, Input, Button, calc, Heading } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

function Upload() {
  return (
    <Container w={'100%'} h={'100vh'} py={'16'}>

        <VStack h={'full'} color={'green.400'} justifyContent={"center"}>
            <Heading color={'grey'}>Upload Your Doubts</Heading>

        <AiOutlineCloudUpload 
        size={'10vmax'}
        />

        <HStack>
            <Input variant={'ghost'} type='file' border={'1px solid green'} css={{
                '&::file-selector-button': {
                    border: 'none',
                    color: 'green',
                    backgroundColor: 'white',
                    height: '100%',
                    width: 'calc(100% + 36px)',
                    cursor: 'pointer',
                    marginLeft: '-16px',
                    
                }
            }}/>
            <Button colorScheme='green' type='submit'>Upload</Button>
        </HStack>
        </VStack>

    </Container>
  )
}

export default Upload
