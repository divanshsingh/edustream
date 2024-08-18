import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

function Videos() {
    const videoArr = [
        'https://i.vimeocdn.com/video/1002583085-c016209ef4555cfbb06ea73dfbed6fb30fdcf2e91b7676129da5b8b2631d256c-d?mw=1920&mh=1080&q=70',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',  
        ]

    const [videoSrc, setVideoSrc] = useState(videoArr[0])

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
        <VStack w={'full'}>
            <video 
            src={videoSrc}
            controls
            controlsList='nodownloads'
            style={{
                width: '100%'
            }}
            ></video>
            <VStack alignItems={'left'} p={'8'} w={'full'} overflow={'auto'}>
                <Heading size={'xl'} textTransform={'uppercase'}>Sample Video 1</Heading>
                <Text letterSpacing={'normal'} lineHeight={'180%'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima dolor iste esse consectetur, dolorem veniam voluptate quis. Illo, eligendi commodi? Rerum esse similique blanditiis distinctio temporibus consequatur, corrupti est?
                Excepturi est placeat dolore optio quis et animi corrupti doloremque cumque dolores voluptates autem itaque nihil, minima culpa reprehenderit explicabo! Itaque quis nulla, molestias architecto id officiis magni nesciunt asperiores.</Text>
            </VStack>
        </VStack>
        <VStack w={['full', 'xl']} alignItems={'stretch'}
        p={'8'}
        >
            {videoArr.map((item, index)=>(
                <Button onClick={()=>{
                    setVideoSrc(item)
                }} variant={'ghost'} colorScheme='green'>Lecture {index + 1} </Button>
            ))}
            
        </VStack>
    </Stack>
  )
}

export default Videos
