import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Our Services
        </Heading>
        <Text fontSize="xl">We offer a variety of services to keep you looking sharp:</Text>
        <Text fontSize="lg">- Haircuts</Text>
        <Text fontSize="lg">- Beard Trims</Text>
        <Text fontSize="lg">- Shaves</Text>
        <Text fontSize="lg">- Hair Coloring</Text>
      </VStack>
    </Box>
  );
};

export default Services;
