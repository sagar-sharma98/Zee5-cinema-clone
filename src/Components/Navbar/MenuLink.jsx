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
  Avatar,
  useDisclosure,
  Popover, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody, PopoverFooter, ButtonGroup,
  position
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { RiVipCrownFill } from "react-icons/ri";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { firebaseAuth } from "../../firebase-auth";
import { signOut } from "firebase/auth";
import { LoginSuccess, LoginFailure } from "../../Context/AuthContext/Action";
import React, { useContext, useRef, useState } from "react";

export default function MenuLink() {
  const [popoOver, setPopOver] = useState(false);
  const { state, dispatch } = useContext(AuthContext);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { isOpen, onToggle, onClose } = useDisclosure()
  let user;

  const username = localStorage.getItem("zee5username");
  if(username){
    user = username[0].toUpperCase() + username.slice(1);
  
  }
  




  // const loginHandler = (e) => {
  //   dispatch(LoginSuccess(true));
  // }

  const logoutHandler = () => {
    dispatch(LoginFailure(false));
    signOut(firebaseAuth);
    localStorage.removeItem("zee5usertoken");
    localStorage.removeItem("zee5username");
    navigate("/login");
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
            
             <>
             <Avatar src='https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png'  onClick={onToggle} cursor="pointer"/>
             <Box position="relative" bottom="3rem">
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
        
      >
        <PopoverContent bgColor="gray.900" >
          <PopoverHeader fontWeight='semibold' border="none">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {user? user : ""}, 
            Are you sure you want to log out?
          </PopoverBody>
          <PopoverFooter display='flex' justifyContent='flex-end' border="none">
            <ButtonGroup size='sm'>
              <Button variant='outline' onClick={onClose} bgColor="white" color="black" >Cancel</Button>
              <Button colorScheme="purple" onClick={logoutHandler} _hover={{ background: "#8230E9", color: "white" }}>Logout</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
      </Box>
             </>
            
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
              <NavLink to="/premiumplan">BUY PLAN</NavLink>
            </Button>
          )}
        </Box>
      </HStack>
    </Flex>
  );
}
