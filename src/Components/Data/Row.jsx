import React, { useEffect, useState } from "react";
import "../../Styles/Row.css";
import { Box, Image, Skeleton, Stack } from "@chakra-ui/react";

const Rows = ({ movies, title, isLargeRow = false, loading }) => {
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
              />
            ))
          : ""}
        ;
      </Box>
    </Box>
  );
};

export default Rows;
