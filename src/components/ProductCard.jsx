import React, { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { AddCartBtn } from "./addCartBtn";

export const Item = ({ product }) => {
  
  const dispatch = useDispatch();



  return (
    <WrapItem>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={product.image}
            alt={product.title}
            borderRadius="md"
            boxSize="200px"
            objectFit="cover"
            mb="10px"
          />

          <Text noOfLines={1} fontSize="xl" fontWeight="bold" mb="10px">
            {product.title}
          </Text>
          <Text noOfLines={[1, 2, 3]}>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            Rs.{product.price}
          </Text>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < product.rating.rate ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {product.rating.count} reviews
            </Box>
          </Box>
        </CardBody>
       <AddCartBtn product={product}/>
      </Card>
    </WrapItem>
  );
};
