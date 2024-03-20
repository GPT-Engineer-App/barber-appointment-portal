import React, { useState } from "react";
import { Box, Heading, VStack, Button, Input, Select, Textarea, useToast } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";

const Appointments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Appointment Booked",
      description: "Your appointment has been successfully booked.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

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
          Book an Appointment
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Select placeholder="Select Service" value={service} onChange={(e) => setService(e.target.value)} required>
              <option value="Haircut">Haircut</option>
              <option value="Beard Trim">Beard Trim</option>
              <option value="Haircut & Beard Trim">Haircut & Beard Trim</option>
            </Select>
            <Input placeholder="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <Input placeholder="Time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            <Textarea placeholder="Additional Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
            <Button type="submit" colorScheme="blue" leftIcon={<FaCalendar />}>
              Book Appointment
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Appointments;
