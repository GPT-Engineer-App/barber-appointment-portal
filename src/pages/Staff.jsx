import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Staff = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Our Staff
        </Heading>
        <Text fontSize="xl">Our talented barbers are ready to serve you:</Text>
        <Text fontSize="lg">- Joe</Text>
        <Text fontSize="lg">- Mike</Text>
        <Text fontSize="lg">- Steve</Text>
      </VStack>
    </Box>
  );
};

export default Staff;
