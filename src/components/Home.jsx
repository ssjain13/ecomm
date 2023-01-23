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

import { StarIcon } from "@chakra-ui/icons";
import { QtyController } from "./qtyController";
import { Item } from "./ProductCard";
import { useSelector } from "react-redux";

export const Home = ({ products }) => {
  


  return (
    <Wrap spacing="20px">
      {products &&
        products.map((product) => (
        <Item product={product} key={product.id}/>
        ))}
    </Wrap>
  );
};
