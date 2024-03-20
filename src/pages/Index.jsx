import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" mt={12}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Overtime Barber Studios
        </Heading>
        <Text fontSize="xl">Overtime Barber Studios is your premier destination for top-notch grooming services. Our skilled barbers are dedicated to providing you with the best haircuts, beard trims, and more in a welcoming and relaxing atmosphere.</Text>
        <Box>
          <Heading as="h2" size="xl">
            Location &amp; Contact
          </Heading>
          <Text>
            OverTime Barber Studios
            <br />
            4507 50th St
            <br />
            Lubbock, Texas 79414
            <br />
            (325) 480-6500
            <br />
            overtbs@gmail.com
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
