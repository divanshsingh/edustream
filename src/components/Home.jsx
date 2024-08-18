import { Box, Container, Heading, Image, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/bannerimg1.webp';
import img2 from '../assets/bannerimg2.webp';
import img3 from '../assets/bannerimg3.webp';
import img4 from '../assets/bannerimg4.webp';
import img5 from '../assets/edustream.webp'
import { transform } from 'framer-motion';
import Videos from './Videos';

let headingStyle = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: "4xl",
};

function Home() {
  
  return (
    
    <Box>
        <MyCarousel />
        <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
          <Heading textTransform={'uppercase'} py="2" borderBottom={'2px solid'} w={'fit-content'} m={'auto'}>What We Provide</Heading>

          <Stack 
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
          >
            <Image borderRadius={'full'} src={img5} h={['40', '400']} />
            <Text letterSpacing={'widest'} lineHeight={'200%'} p={['1','16']} textAlign={'center'}>
            Edustream offers a wide range of video lectures across various subjects, curated by top educators for the best learning experience. You can easily upload your doubts and receive clear explanations from experts or peers, ensuring you never fall behind. Learn at your own pace with flexible modules designed to fit your schedule. Plus, engage with a supportive community of learners to share resources and grow together.
            </Text>
          </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = ()=>(
  <Carousel 
  autoPlay
  infiniteLoop
  interval={1000}
  showArrows={false}
  showStatus={false}
  showThumbs={false}
  >

    <Box w='full' h={'90vh'}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingStyle}>Expert-Led Video Lectures</Heading>
    </Box>

    <Box w='full' h={'90vh'}>
      <Image src={img2} />
      <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingStyle}>Upload Your Doubts</Heading>
    </Box>

    <Box w='full' h={'90vh'}>
      <Image src={img3} />
      <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingStyle}>Personalized Learning Experience

</Heading>
    </Box>

    <Box w='full' h={'90vh'}>
      <Image src={img4} />
      <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingStyle}>Flexible Learning Options</Heading>
    </Box>

  </Carousel>
  
)
export default Home
