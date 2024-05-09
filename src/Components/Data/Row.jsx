import React, { useEffect, useState } from "react";
import "../../Styles/Row.css";
import { Box, Image, Skeleton, Stack } from "@chakra-ui/react";

import VideoModal from "../Slider/VideoModal";

const dummy_video = process.env.PUBLIC_URL + "/videos/Dummy_Video.mp4";

const Rows = ({ movies, title, isLargeRow = false, loading }) => {
  const [imageClick, setImageClick] = useState(false);

  const videoModalHandler = () => {
    setImageClick(false);
  };
  if (loading) {
    return (
      <Stack>
        <Skeleton startColor="white" endColor="orange.500" height="60px" />
        <Skeleton startColor="white" endColor="orange.500" height="60px" />
        <Skeleton startColor="white" endColor="orange.500" height="20px" />
      </Stack>
    );
  }

  return (
    <Box className="row">
      <h2 className="row__title">{title}</h2>
      <Box className={`row__posters ${isLargeRow && "row__postersLarge"}`}>
        {movies
          ? movies.map((movie) => (
           
                <Image
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  src={isLargeRow ? movie.poster_path : movie.backdrop_path}
                  alt={movie.original_title}
                  onClick={() => setImageClick(true)}
                />
              
            ))
          : ""}
           {imageClick && (
                  <VideoModal
                    id="video-player"
                    videosrc={dummy_video}
                    closeVideoHandler={videoModalHandler}
                  />
                )}
        ;
      </Box>
    </Box>
  );
};

export default Rows;
