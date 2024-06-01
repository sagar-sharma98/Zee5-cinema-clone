import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import "../Styles/Row.css";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const { title, search } = useParams();
  const navigate = useNavigate();
  console.log(title, search);

  const fetchMoviesData = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show?search={"title" : "${search}"}`,
        {
          headers: {
            projectId: "80bobsy2tlw7",
          },
        }
      );
      const result = await response.json();
      console.log(result.data);
      setMovies(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const imageHandler = (id) => {
    navigate(`/videoplayer/${id}`);
  }
  useEffect(() => {
    fetchMoviesData();
  }, []);

  return (
    <>
    <Navbar/>
    <Box   h="100%" w="100%" p="20px" backgroundColor="black">
      <Heading color="white" textAlign="start">
       {`${title} : ${search}`}
      </Heading>
      <Grid templateColumns="repeat(auto-fill, 260px)" pt="2rem" gap={6}>
        {movies &&
          movies.map((movie) => (
            <GridItem className="row__poster" key={movie._id

            }>
              <Image
                objectFit="cover"
                w="100%"
                h="100%"
                src={movie.thumbnail}
                alt="movie poster"
                backgroundColor="red"
                onClick={() => imageHandler(movie._id)}
              />
              {/* <Text id="title">title</Text> */}
            </GridItem>
          ))}
      </Grid>
    </Box>
    <Footer/>
    </>
  );
}
