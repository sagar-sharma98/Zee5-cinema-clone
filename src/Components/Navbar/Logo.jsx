import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
export default function Logo() {
  return (
    <Flex>
      <Box>
        <Image
          src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.40"
          boxSize="50px"
        ></Image>
      </Box>

      <HStack>
        <Box pl={5}>
          <Breadcrumb separator=" " spacing="5">
            <BreadcrumbItem
              bg="#0F0617"
              _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <NavLink to="/">Home</NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              bg="#0F0617"
              _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <NavLink to="/movies">Movies</NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              bg="#0F0617"
              _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <NavLink to="/music">Music</NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              bg="#0F0617"
              _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <NavLink to="/wishlist">Wishlist</NavLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box pl={3}>
          {/* <Menu>
            <MenuButton
              as={DragHandleIcon}
              aria-label="Options"
              variant="outline"
            />
            <MenuList h="530" bg="#0F0617">
              {[
                "Web Series",
                "News",
                "Premium",
                "Live TV",
                "Music",
                "Rent",
                "Kids",
                "Videos",
                "Channels",
              ].map((el) => (
                <MenuItem
                  key={el}
                  padding="4"
                  borderRadius="20"
                  pl="10"
                  _hover={{ background: "#1B1323" }}
                >
                  {el}
                </MenuItem>
              ))}
            </MenuList>
          </Menu> */}

        </Box>
      </HStack>
    </Flex>
  );
}
