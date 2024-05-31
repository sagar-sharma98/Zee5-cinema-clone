import React, { useContext } from "react";
import { Box, Button, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import "../Styles/Row.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Footer from "./Footer";
import Navbar from "../Components/Navbar/Navbar";
import { removeWishList } from "../Context/AuthContext/Action";

export default function Wishlist() {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(state.wishList);
  // const [hover, setHover] = useState(true);

  // if(hover){
  //   document.getElementById("title").style.display = "none";
  // }
  const isLargeRow = false;

  const imageHandler = (id) => {
    navigate(`/videoplayer/${id}`);
  };

  const removeHandler = (id) => {
    dispatch(removeWishList(id))
  }
  return (
    <>
      <Navbar />
      <Box w="100vw" h="100vh" p="20px" backgroundColor="black">
        <Heading color="white" textAlign="start">
          Wishlist:
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" pt="2rem" gap={6}>
          {state.wishList &&
            state.wishList.map((movie) => (
              <GridItem className="row__poster">
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
