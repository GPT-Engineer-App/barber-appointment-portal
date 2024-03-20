import React from "react";
import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex minHeight="70vh" align="center" justify="center" direction="column" background="url('hero-bg.jpg') center/cover no-repeat">
        <Heading as="h1" size="2xl" mb={4} color="white" textAlign="center">
          Elevate Your Grooming Experience
        </Heading>
        <Text fontSize="xl" mb={8} color="white" textAlign="center">
          Discover the ultimate barbershop experience at Overtime Barber Studios.
        </Text>
        <Button as={Link} to="/booking" colorScheme="blue" size="lg">
          Book Now
        </Button>
      </Flex>

      <VStack spacing={16} my={20} align="center">
        <Heading as="h2" size="xl">
          Featured Services
        </Heading>
        <Flex justify="space-around" wrap="wrap">
          {}
        </Flex>

        <Heading as="h2" size="xl">
          Locations
        </Heading>
        <Flex justify="space-around" wrap="wrap">
          {}
        </Flex>

        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready for a fresh cut?
          </Heading>
          <Button as={Link} to="/booking" colorScheme="blue" size="lg">
            Book an Appointment
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
