import { Button, FormLabel, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/cart";

export const QtyController = ({ qty,p }) => {
  const dispatch = useDispatch();

  return (
    <Flex justifyContent={"space-evenly"} width="100%">
      <Button
        size={"md"}
        bg={"blue.200"}
        leftIcon={<FiPlus />}
        onClick={() => {
          dispatch(increment(p));
        }}
      />
      <FormLabel fontSize="xl">{qty}</FormLabel>

      <Button
        size={"md"}
        bg={"blue.200"}
        leftIcon={<FiMinus />}
        onClick={() => {
          dispatch(decrement(p));
        }}
      />
    </Flex>
  );
};
