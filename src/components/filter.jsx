import { Box, Button, Flex, Select } from "@chakra-ui/react";
import React from "react";
import { HiSortAscending } from "react-icons/hi";
import { HiSortDescending } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
export const Filters = ({ categories }) => {
  return (
    <Flex justifyContent={"flex-end"}>
      <Button leftIcon={<HiSortAscending />} ml="10px" mr="10px" />
      <Button leftIcon={<HiSortDescending />} ml="10px" mr="10px" />

      <Select width="300px" icon={<BiFilter />} mr="10px" variant="filled">
        <option value="ALL">ALL</option>
        {categories &&
          categories.map((category) => (
            <option value={category} key={category}>{category}</option>
          ))}
      </Select>
    </Flex>
  );
};
