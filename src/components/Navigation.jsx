import React from "react";
import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <HStack spacing={8} justify="center">
        <Link as={RouterLink} to="/">
          Home
        </Link>
        <Link as={RouterLink} to="/booking">
          Booking
        </Link>
      </HStack>
    </Box>
  );
};

export default Navigation;
