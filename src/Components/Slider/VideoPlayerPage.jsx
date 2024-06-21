import React, { useContext, useEffect, useState } from "react";
import {
  ChakraProvider,
  Grid,
  GridItem,
  Box,
  Button,
  Image,
  VStack,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { addWishlist } from "../../Context/AuthContext/Action";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Pages/Footer";

function VideoPlayerPage({wishlist = true}) {
  const [movie, setMovie] = useState();
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const isLargeRow = true;

  const token = localStorage.getItem("zee5usertoken");

  if(!token){
    navigate('/login');
  }

  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
        {
          headers: {
            projectID: "80bobsy2tlw7",
          },
        }
      );
      const result = await response.json();
      console.log(result.data);
      setMovie(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchMoviesData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://academics.newtonschool.co/api/v1/ott/show?limit=4",
  //       {
  //         headers: {
  //           projectID: "80bobsy2tlw7",
  //         },
  //       }
  //     );
  //     const result = await response.json();
  //     console.log(result.data);
  //     setMovies(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log(id);
  const wishlistBtnHandler = async(id) => {
    const token = localStorage.getItem("zee5usertoken");
    console.log(id, typeof(id));
    console.log(token);
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like", {
        method: "PATCH",
        headers: {
          "projectID" : "80bobsy2tlw7",
          'Authorization': `Bearer ${token}`,  
          "Content-Type": "application/json"
        },
        body: JSON.stringify( {
          showId: id
        })
      })
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    navigate("/wishlist");
  };

  useEffect(() => {
    fetchMovieData();
    // fetchMoviesData();
  }, []);
  return (
    <ChakraProvider>
      <Navbar />
      <Box width="100vw" height="100vh" backgroundColor="black">
        {movies && movie && (
          <>
            <HStack width="100%" height="80%" backgroundColor="red">
              <Box width="100%" height="100%" backgroundColor="orange">
                <video
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  autoPlay
                  controls
                  src={movie.video_url}
                >
                  Your browser does not support the video tag.
                </video>
              </Box>
              {/* <Box width="30%" height="100%" backgroundColor="green">
                <Grid
                  ml="4px"
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(2, 1fr)"
                  height="100%"
                >
                  {movies.map((movie) => (
                    <GridItem w="200px" h="250px">
                      <Image
                      className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={movie.thumbnail}
                        w="100%"
                        h="100%"
                        alt="Movie Poster"
                      />
                    </GridItem>
                  ))}
                </Grid>
              </Box> */}
            </HStack>
            <Box>
              <VStack width="70%" alignItems="start" ml="10px">
                <Heading color="white">{movie.title}</Heading>
                <Text>{movie.description}</Text>
                <Button
                  // backgroundColor="white"
                  colorScheme= "purple"
                  width="10rem"
                  onClick={() => wishlistBtnHandler(movie._id)}
                >
                  Add to Wishlist
                </Button>
              </VStack>
            </Box>
          </>
        )}
        
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default VideoPlayerPage;
