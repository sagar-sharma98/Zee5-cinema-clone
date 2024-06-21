import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import "../Styles/Row.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Footer from "./Footer";
import Navbar from "../Components/Navbar/Navbar";
import { removeWishList } from "../Context/AuthContext/Action";

export default function Wishlist() {
  // const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(state.wishList);
  const [wishList, setWishList] = useState([]);
  // const [hover, setHover] = useState(true);

  // if(hover){
  //   document.getElementById("title").style.display = "none";
  // }
  const isLargeRow = false;
  const token = localStorage.getItem("zee5usertoken");
  console.log(token);

  if(!token){
    navigate('/login');
  }

  const fetchWishlist = async () => {
   
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like", {
      method: "GET",
      headers: {
        "projectID" : "80bobsy2tlw7",
        'Authorization': `Bearer ${token}`,  
      }
      });
      const result = await response.json();
      console.log(result.data.shows);
      setWishList(result.data.shows)
    } catch (error) {
      console.log(error);
      navigate('/login')
    }
  };

  const imageHandler = (id) => {
    navigate(`/videoplayer/${id}`);
  };

  const removeHandler = async (id) => {
  
   
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
    fetchWishlist();
  };

  useEffect(() => {
    fetchWishlist();
  },[]);
  return (
    <>
      <Navbar />
      <Box h="100vh" p="20px" backgroundColor="black">
        <Heading color="white" textAlign="start">
          Wishlist:
        </Heading>
        <Grid templateColumns="repeat(auto-fill, 260px)"  pt="2rem" gap={6}>
          {wishList &&
            wishList.map((movie) => (
              <GridItem className="row__poster" key={movie._id

              }>
                <Image
                  objectFit="cover"
                  w="100%"
                  h="80%"
                  src={movie.thumbnail}
                  alt="movie poster"
                  backgroundColor="red"
                  onClick={() => imageHandler(movie._id)}
                />
                <Button
                  display="flex"
                  size="sm"
                  fontSize={12}
                  w="full"
                  colorScheme="black"
                  backgroundColor="black"
                  _hover={{ background: "black", color: "white" }}
                  onClick={() => removeHandler(movie._id)}
                >
                  Remove
                </Button>
                {/* <Text id="title">title</Text> */}
              </GridItem>
            ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
