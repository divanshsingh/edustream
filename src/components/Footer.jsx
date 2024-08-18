import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, HStack, Stack, VStack, Input, Button } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'

function Footer(props) {
  return (
    <Box minH={'40'} bgColor={'blackAlpha.900'} color={'white'} p={'6'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'}
                textAlign={['center', 'left']}
                >
                    Want to be Updated?
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input 
                    placeholder="Enter your email..."
                    border={'none'}
                    outline={'none'}
                    borderRadius={'none'}
                    focusBorderColor={'none'}
                    />
                    <Button
                    p={'0'}
                    colorScheme={'green'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={'20'}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'}
    
            >
                <Heading textTransform={'uppercase'} size={'md'}>Social Media</Heading>
                <Button variant={'link'} colorScheme='white'><a href="https://github.com/divanshsingh" target='_blank'>Github</a></Button>
                <Button variant={'link'} colorScheme='white'><a href="https://www.linkedin.com/in/divansh-singh-16053b258/" target='_blank'>LinkedIn</a></Button>
                <Button variant={'link'} colorScheme='white'><a href="https://x.com/DivanshSin39085" target='_blank'>Twitter</a></Button>
                <Button variant={'link'} colorScheme='white'><a href="https://www.instagram.com/divansh_xml/" target='_blank'>Instagram</a></Button>
            </VStack>
        </Stack>
    </Box>
  )
}

Footer.propTypes = {

}

export default Footer

