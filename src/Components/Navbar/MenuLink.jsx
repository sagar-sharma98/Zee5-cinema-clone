import {
  Box,
  HStack,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Icon,
  Tag,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { RiVipCrownFill } from "react-icons/ri";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { firebaseAuth } from "../../firebase-auth";
import { signOut } from "firebase/auth";
import { LoginSuccess, LoginFailure } from "../../Context/AuthContext/Action";
import React, { useContext, useRef } from "react";

export default function MenuLink() {
  const { state, dispatch } = useContext(AuthContext);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  // const loginHandler = (e) => {
  //   dispatch(LoginSuccess(true));
  // }

  const logoutHandler = () => {
    dispatch(LoginFailure(false));
    signOut(firebaseAuth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const search = inputRef.current.value;
    navigate(`/searchpage/Search/${search}`);
  };


  return (
    <Flex>
      <HStack gap="30px">
        <Box>
          <form onSubmit={submitHandler}>
            <InputGroup w={340}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="white" />}
              />
              <Input
                size="sm"
                focusBorderColor="Purple"
                borderRadius={5}
                type="search"
                ref={inputRef}
                placeholder="Search for Movies, Shows, Channels etc."
                fontSize="13"
              />
            </InputGroup>
          </form>
        </Box>
        <Box>
          {state.login === true ? (
            <Button
              size="sm"
              fontSize={10}
              color="white"
              bg="#0F0617"
              padding={3}
              variant="outline"
              onClick={logoutHandler}
              _hover={{ background: "white", color: "black" }}
            >
              <NavLink to={"/login"}>LOGOUT</NavLink>
            </Button>
          ) : (
            <Button
              size="sm"
              fontSize={10}
              color="white"
              bg="#0F0617"
              padding={3}
              variant="outline"
              // onClick={loginHandler}
              _hover={{ background: "white", color: "black" }}
            >
              <NavLink to={"/login"}>LOGIN</NavLink>
            </Button>
          )}
        </Box>
        <Box>
          {state.alert === true ? (
            <Tag
              size="lg"
              key="md"
              variant="solid"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              color="white"
            >
              ZEE5 Premium
            </Tag>
          ) : (
            <Button
              size="sm"
              padding={3.5}
              fontSize={12}
              w={140}
              colorScheme="purple"
              _hover={{ background: "#8230E9", color: "white" }}
              leftIcon={<Icon as={RiVipCrownFill} width="18px" height="18px" />}
            >
              <NavLink to={"/premiumplan"}>BUY PLAN</NavLink>
            </Button>
          )}
        </Box>
      </HStack>
    </Flex>
  );
}
