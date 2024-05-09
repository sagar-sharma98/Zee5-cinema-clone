import { AspectRatio, Box } from "@chakra-ui/react";
import { ArrowBackIcon} from "@chakra-ui/icons"; 
import React from "react";
import ReactDOM from "react-dom"

export default function VideoModal({ videosrc, closeVideoHandler }) {
  // const closeBtnHandler = () => {
  //   closeVideoHandler(false);
  // }
  return (
    ReactDOM.createPortal( <Box 
      bg="black"
      w="100%"
      h="100%"
      position="fixed"
      top="50%"
      left="50%"
      borderRadius="4px"
      transform="translate(-50%, -50%)"
      zIndex="9999"
    >
      <ArrowBackIcon position="absolute" left="2rem" top="2rem" boxSize="10" cursor="pointer" color="white" zIndex="7" onClick={closeVideoHandler} />
      
      <AspectRatio className="video_player" w="100%" h="100%">
      <video src={videosrc} autoPlay  controls />
          
      </AspectRatio>
    </Box>, document.getElementById("video-modal"))
     
   
  );
}
