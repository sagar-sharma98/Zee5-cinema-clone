import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Box,
  Button,
  HStack,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  DrawerFooter,
  AccordionIcon,
  Text,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function DrawerApp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Sorry",
      description: "Work in progress.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top",
    })
  }
  return (
    <HStack>
      <Box>
        <Button
          size="sm"
          onClick={onOpen}
          colorScheme="none"
          leftIcon={<Icon color={"white"} w={30} h={30} as={AiOutlineMenu} />}
        ></Button>
      </Box>
      <Box>
        <Drawer
          marginTop={30}
          size="xs"
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          color={"white"}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay w={20}/>
          <DrawerContent bg="#0f0617">
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody bg="#0f0617" color="white">
              <Link to={"/"}>
                <h2>Home</h2>
              </Link>
              <hr />
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Explore
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <NavLink to="/movies">TV Shows</NavLink>
                    <br />
                    <NavLink to="/movies">Movies</NavLink>
                    <br />
                    <NavLink to="/movies">Web Series</NavLink>
                    <br />
                    <NavLink to="/dummylink">News</NavLink>
                    <br />
                    <NavLink to="/dummylink">Eduaraa</NavLink>
                    <br />
                    <NavLink to="/dummylink">Premium</NavLink>
                    <br />
                    <NavLink to="/dummylink">Live Tv</NavLink>
                    <br />
                    <NavLink to="/music">Music</NavLink>
                    <br />
                    <NavLink to="/dummylink">ZEEPLEX</NavLink>
                    <br />
                    <NavLink to="/dummylink">Play</NavLink>
                    <br />
                    <NavLink to="/dummylink">Articles</NavLink>
                    <br />
                    <NavLink to="/dummylink">Kids</NavLink>
                    <br />
                    <NavLink to="/movies">Videos</NavLink>
                    <br />
                    <NavLink to="/dummylink">Stories</NavLink>
                    <br />
                    <NavLink to="/dummylink">Channels</NavLink>
                    <br />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Plans
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <NavLink to="/premiumplan">Buy Plan</NavLink>
                    <br />
                    <Link>Have a Prepaid code?</Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem >
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" >
                        Settings
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link onClick={showToast}>Language</Link>
                    <br />
                    <Link onClick={showToast}>Reset setting to default</Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Info
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link onClick={showToast}>About us</Link>
                    <br />
                    <Link onClick={showToast}>Help Center</Link>
                    <br />
                    <Link onClick={showToast}>Content Redressal Mechanism</Link>
                    <br />
                    <Link onClick={showToast}>Terms of use</Link>
                    <br />
                    <Link onClick={showToast}>Privacy Policy</Link>
                    <br />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
            <hr />
            <DrawerFooter textAlign="center">
              <Text color={"white"}>Version 2.51.65</Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </HStack>
  );
}
