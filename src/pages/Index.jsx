import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button, Input, Select, Textarea, useToast } from "@chakra-ui/react";
import { FaCalendar, FaClock, FaUser } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., send data to server)
    toast({
      title: "Appointment Booked",
      description: "Your appointment has been successfully booked.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Reset form fields
    setName("");
    setEmail("");
    setService("");
    setDate("");
    setTime("");
    setNotes("");
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Joe's Barbershop
        </Heading>
        <Image src="https://images.unsplash.com/photo-1708536395181-f33a13ef62f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzEwOTIxNTMxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Barbershop" />
        <Text fontSize="xl">Welcome to Joe's Barbershop! Book your appointment now for a fresh cut.</Text>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Select placeholder="Select Service" value={service} onChange={(e) => setService(e.target.value)} required>
              <option value="Haircut">Haircut</option>
              <option value="Beard Trim">Beard Trim</option>
              <option value="Haircut & Beard Trim">Haircut & Beard Trim</option>
            </Select>
            <HStack>
              <Input placeholder="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              <Input placeholder="Time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </HStack>
            <Textarea placeholder="Additional Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
            <Button type="submit" colorScheme="blue" leftIcon={<FaCalendar />}>
              Book Appointment
            </Button>
          </VStack>
        </Box>
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
