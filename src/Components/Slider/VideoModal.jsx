import { AspectRatio, CloseButton, VStack } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom"

export default function VideoModal({ videosrc, closeVideoHandler }) {
  // const closeBtnHandler = () => {
  //   closeVideoHandler(false);
  // }
  return (
    ReactDOM.createPortal( <VStack 
      bg="black"
      w="70%"
      h="80%"
      position="fixed"
      top="50%"
      left="50%"
      borderRadius="4px"
      transform="translate(-50%, -50%)"
      zIndex="9999"
    >
      <CloseButton size="lg" color="white" onClick={closeVideoHandler} />
      <AspectRatio className="video_player" w="100%" h="100%">
        <iframe src={videosrc === "" ? "https://www.youtube.com/embed/nu2HHq3sens" : videosrc} />
      </AspectRatio>
    </VStack>, document.getElementById("video-modal"))
     
   
  );
}
