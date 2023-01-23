import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
export const IconButton = ({ icon, navigateURL }) => {
  const navigate = useNavigate();
  return (
    <Button
      leftIcon={icon}
      mt="10px"
      mr="10px"
      onClick={() => navigate(`${navigateURL}`)}
    ></Button>
  );
};
