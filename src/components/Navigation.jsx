import React from "react";
import { Box, Flex, HStack, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="white" py={4} boxShadow="md">
      <Flex maxWidth="1200px" margin="auto" align="center" justify="space-between">
        <Link as={RouterLink} to="/">
          <Image src="logo.png" alt="Overtime Barber Studios" height="50px" />
        </Link>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/locations">
            Locations
          </Link>
          <Link as={RouterLink} to="/booking">
            Book Now
          </Link>
          <Link as={RouterLink} to="/franchise">
            Franchise
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
