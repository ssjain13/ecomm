import {
  Flex,
  Button,
  Image,
  Text,
  Heading,
  Box,
  Badge,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { FaShoppingCart, FaHome } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { IconButton } from "./IconButton";
import "../styles/main.style.css";
import { useSelector } from "react-redux";

export const Pageheader = () => {
  let location = useLocation();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Flex
      pt="20px"
      mb="30px"
      gap="2"
      alignItems="center"
      minWidth="max-content"
    >
      <Heading color={"pink.500"} fontSize="50px">
        Fashionesta
      </Heading>
      <Spacer />
      <ButtonGroup gap="2">
        <Button leftIcon={<BiLogIn />} mr="10px" mt="10px" mb="10px">
          Login
        </Button>

        {location.pathname === "/" && (
          <>
            <div className="Nav">
              <div className="cart">
                <div>
                  <IconButton icon={<FaShoppingCart />} navigateURL="/cart" />
                </div>
                <div className="badge">{cartItems.length}</div>
              </div>
            </div>
          </>
        )}

        {location.pathname !== "/" && (
          <IconButton icon={<FaHome />} navigateURL="/" />
        )}
      </ButtonGroup>
    </Flex>
  );
};
