import React, { useEffect, useState } from "react";
import "../../Styles/Row.css";
import { Box, Image, Skeleton, Stack } from "@chakra-ui/react";
import VideoPlayerPage from "../Slider/VideoPlayerPage";
import { useNavigate } from "react-router-dom";

const dummy_video = process.env.PUBLIC_URL + "/videos/Dummy_Video.mp4";

const Rows = ({ movies, title, isLargeRow = false, loading }) => {
  const navigate = useNavigate();

  const imageClickHandler = (id) => {
    navigate(`/videoplayer/${id}`);
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
              objectFit="cover"
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie._id}
                src={isLargeRow ? movie.thumbnail : movie.thumbnail}
                alt={movie.title}
                onClick={() => imageClickHandler(movie._id)}
              />
            ))
          : ""}
        ;
      </Box>
    </Box>
  );
};

export default Rows;
