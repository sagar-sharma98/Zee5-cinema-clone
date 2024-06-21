import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from './Footer'

export default function DummyLink() {
  return (
    <>
    <Navbar/>
   <Box w="100vw" h="80vh" bg="black" display="flex" justifyContent="center" alignItems="center">
    <Heading color="white">The content will be available soon.</Heading>
   </Box>
    <Footer/>
    </>
  )
}
