import React, { useState } from "react";
import { Box, Button, Heading, Select, Text, VStack } from "@chakra-ui/react";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Heading as="h2" size="xl" mb={8}>
              Select Location
            </Heading>
            <Select placeholder="Select a location" value={location} onChange={(e) => setLocation(e.target.value)} mb={8}>
              {}
            </Select>
            <Button onClick={() => setStep(2)} colorScheme="blue">
              Next
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <Heading as="h2" size="xl" mb={8}>
              Select Service
            </Heading>
            <Select placeholder="Select a service" value={service} onChange={(e) => setService(e.target.value)} mb={8}>
              {}
            </Select>
            <Button onClick={() => setStep(3)} colorScheme="blue">
              Next
            </Button>
          </>
        );
      case 3:
        return (
          <>
            <Heading as="h2" size="xl" mb={8}>
              Select Date & Time
            </Heading>
            {}
            <Button onClick={() => setStep(4)} colorScheme="blue">
              Next
            </Button>
          </>
        );
      case 4:
        return (
          <>
            <Heading as="h2" size="xl" mb={8}>
              Your Information
            </Heading>
            {}
            <Button type="submit" colorScheme="blue">
              Book Now
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box maxWidth="600px" margin="auto" mt={12}>
      <Heading as="h1" size="2xl" mb={12} textAlign="center">
        Book an Appointment
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={8} align="stretch">
          {renderStep()}
        </VStack>
      </form>
    </Box>
  );
};

export default Booking;
