import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Locations = () => {
  return (
    <Box maxWidth="1200px" margin="auto" mt={12}>
      <Heading as="h1" size="2xl" mb={12} textAlign="center">
        Our Locations
      </Heading>
      <VStack spacing={12} align="stretch">
        {}
      </VStack>
    </Box>
  );
};

export default Locations;
