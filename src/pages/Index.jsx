import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button } from "@chakra-ui/react";
import { FaClock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Joe's Barbershop
        </Heading>
        <Image src="https://images.unsplash.com/photo-1708536395181-f33a13ef62f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzEwOTIxNTMxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Barbershop" />
        <Text fontSize="xl">Welcome to Joe's Barbershop! Book your appointment now for a fresh cut.</Text>
        <Button as={Link} to="/appointments" colorScheme="blue">
          Book an Appointment
        </Button>
        <HStack justify="center">
          <FaClock />
          <Text>Open: Monday - Saturday, 9am - 7pm</Text>
        </HStack>
        <HStack justify="center">
          <FaUser />
          <Text>Our Barbers: Joe, Mike, Steve</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
