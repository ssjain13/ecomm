import React from 'react'

import {
    Box,
    Text,
    Flex,
    Button,
    Image,
    TagLabel,
    Divider,
  } from "@chakra-ui/react";
  import { MdClear } from "react-icons/md";
  import { useDispatch, useSelector } from "react-redux";
  import { clearCart, removeFromCart } from "../redux/cart";

export const ShoppingCartHeader = () => {
    const dispatch = useDispatch();
  return (
    <Box>
        <Text fontSize="2xl">Shopping Cart</Text>
        <Button
          leftIcon={<MdClear />}
          size="md"
          iconSpacing={"1"}
          onClick={() => dispatch(clearCart())}
          variant="solid"
          colorScheme="gray"
          mt="10px"
          mb="10px"
        >
          Clear
        </Button>
      </Box>
  )
}
