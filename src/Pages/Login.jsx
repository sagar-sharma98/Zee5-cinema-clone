import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase-auth";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { LoginSuccess } from "../Context/AuthContext/Action";

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleClick = async () => {
    // try {
    //   await signInWithEmailAndPassword(
    //     firebaseAuth,
    //     loginData.email,
    //     loginData.password
    //   );
    //   dispatch(LoginSuccess(true));
    //   navigate("/");
    // } catch (error) {
    //   toast({
    //     title: "Login failed.",
    //     description: "Enter the correct email and password, or go to signup.",
    //     status: "error",
    //     duration: 9000,
    //     isClosable: true,
    //     position: "top",
    //   });
    //   console.log(error);
    // }
    
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
        method: "POST",
        headers: {
          'projectId': '80bobsy2tlw7',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
  
          email : loginData.email,
          password : loginData.password,
          appType : "ott",
        }),
      })
      const result = await response.json();
      console.log(result);
      localStorage.setItem("zee5usertoken", result.token);
      localStorage.setItem("zee5username", result.data.user.name);
      dispatch(LoginSuccess(true));
      toast({
        title: "Login failed.",
        description: "Welcome, login successful.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      navigate("/");

    } catch (error) {
      console.log(error);
      toast({
            title: "Login failed.",
            description: "Enter the correct email and password, or go to signup.",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
    }
  };

  const logoutHandler = () => {
    setLogin(false);
    signOut(firebaseAuth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Box h="100vh">
      <Box w="90%" >
        <Flex justify="right">
          <NavLink to="/">
            <CloseIcon color="white" />
          </NavLink>
        </Flex>
      </Box>

      <Container p={10} mt="-4" background="rgb(15,6,23)">
        <Box>
          <Heading color="white" size="md">
            Login to ZEE5
          </Heading>
          <Text
            mt={5}
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            color="rgb(207, 195, 202)"
          >
            Login to continue enjoying uninterrupted video and personalised
            experience.
          </Text>
        </Box>
        <Box
          display="flex"
          gap="1.5rem"
          size="40px"
          marginTop="2.6rem"
          justifyContent="center"
          fontSize="38px"
          color="white"
          cursor="pointer"
        >
          <FaApple />
          <AiFillGoogleCircle />
          <BsFacebook />
          <AiFillTwitterCircle />
        </Box>
        <Box mt="2rem">
          <Button
            bg="black"
            size="md"
            borderRadius="50%"
            color="white"
            _hover={{ bg: "teal", color: "white" }}
          >
            Or
          </Button>
        </Box>
        <Box mt="1rem">
          <Input
            color="white"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            variant="flushed"
            w="sm"
            placeholder="Email ID"
            focusBorderColor="red"
          />
          <Input
            mt="1rem"
            color="white"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            variant="flushed"
            w="sm"
            type="password"
            placeholder="Password"
            focusBorderColor="red"
          />
        </Box>
        <Box mt="2rem">
          <Text fontSize="13px" color="#A785FF">
            Forgot Password?
          </Text>
        </Box>
        <Box mt="2rem">
          <Button
            bg="#8230C6"
            color="white"
            size="md"
            onClick={handleClick}
            width="360px"
            h="45px"
            _hover={{ bg: "white", color: "#8230C6" }}
          >
            Login
          </Button>
        </Box>
        <Box mt="2rem">
          <Flex justify="center">
            <Text fontSize="13px" color="white">
              New to ZEE5?
            </Text>
            <Text fontSize="13px" color="#A785FF">
              <NavLink to="/register">Register</NavLink>
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
