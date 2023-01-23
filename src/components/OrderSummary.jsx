import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const OrderSummary = ({
  setAccordionProps,
}) => {
  const { billingInfo } = useSelector((state) => state.billing);

  return (
    <Box>
      <Text fontSize={"2xl"} mb="10px">
        Price Details
      </Text>

      <Card size="md">
        <CardBody>
          <Flex justifyContent={"space-between"}>
            <Text>Price ({billingInfo.items.length} items)</Text>
            <Text>{billingInfo.total}</Text>
          </Flex>

          <Flex justifyContent={"space-between"}>
            <Text>Discount</Text>
            <Text>-{(billingInfo.discount / 100) * billingInfo.total}</Text>
          </Flex>

          <Flex justifyContent={"space-between"}>
            <Text>Delivery Charges: </Text>
            <Text color="green">FREE</Text>
          </Flex>

          <Flex justifyContent={"space-between"}>
            <Text fontSize={"xl"}>Total Amount</Text>
            <Text fontSize={"xl"} fontWeight="bold">
              {Math.round(
                billingInfo.total -
                  (billingInfo.discount / 100) * billingInfo.total
              )}
            </Text>
          </Flex>
        </CardBody>
        <CardFooter>
          <Flex>
            <Button
              colorScheme={"telegram"}
              onClick={() => {
                setAccordionProps((prev) => ({
                  ...prev,
                  isSummary: false,
                  isPayment: false,
                  accordionIndex: 2,
                }));
              }}
            >
              Continue
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  );
};
