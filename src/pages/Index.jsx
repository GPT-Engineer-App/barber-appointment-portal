import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button } from "@chakra-ui/react";
import { FaClock, FaUser, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8} bg="black">
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Overtime Barber Studios
        </Heading>
        <Image src="https://images.unsplash.com/photo-1708536395181-f33a13ef62f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzEwOTIxNTMxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Barbershop" />
        <Text fontSize="xl" color="white">
          Welcome to Overtime Barber Studios! Book your appointment now for a fresh cut.
        </Text>
        <Button as={Link} to="/appointments" colorScheme="blue">
          Book an Appointment
        </Button>
        <HStack justify="center">
          <FaClock />
          <Text>Open: Monday - Saturday, 9am - 7pm</Text>
        </HStack>
        <Box>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.9676802835686!2d-101.92193348481647!3d33.52022158075192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12c4d5ba1dad%3A0x7edf0a3a5b9c4d2d!2s4507%2050th%20St%2C%20Lubbock%2C%20TX%2079414!5e0!3m2!1sen!2sus!4v1687305024171!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
        <VStack spacing={2} align="start">
          <Text color="white">OverTime Barber Studios</Text>
          <Text color="white">4507 50th St</Text>
          <Text color="white">Lubbock, Texas 79414</Text>
          <Text color="white">(325) 480-6500</Text>
          <Text color="white">overtbs@gmail.com</Text>
        </VStack>
        <HStack justify="center">
          <FaMapMarker color="white" />
          <Text color="white">Location: 123 Main St, Anytown USA</Text>
        </HStack>
        <HStack justify="center">
          <FaClock color="white" />
          <Text color="white">Open: Monday - Saturday, 9am - 7pm</Text>
        </HStack>
        <HStack justify="center">
          <FaMapMarker />
          <Text>Location: 123 Main St, Anytown USA</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
