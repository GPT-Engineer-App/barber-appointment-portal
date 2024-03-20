import React, { useState } from "react";
import { Box, Heading, VStack, Button, Select, useToast } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";

const Booking = () => {
  const [staff, setStaff] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

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

    setStaff("");
    setService("");
    setTime("");
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Book an Appointment
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Select placeholder="Select Staff" value={staff} onChange={(e) => setStaff(e.target.value)} required>
              <option value="BIGGA BOI THE BARBER">BIGGA BOI THE BARBER</option>
              <option value="MURDA MACE KUTS">MURDA MACE KUTS</option>
              <option value="LUKECUTS">LUKECUTS</option>
              <option value="FINESSE THE BARBER(MARCUS) DEEZE BLENDZ">FINESSE THE BARBER(MARCUS) DEEZE BLENDZ</option>
              <option value="SAYLES CUTS">SAYLES CUTS</option>
            </Select>
            <Select placeholder="Select Service" value={service} onChange={(e) => setService(e.target.value)} required>
              <option value="COLLEGE CUT">COLLEGE CUT</option>
              <option value="HIGHSCHOOL CUT">HIGHSCHOOL CUT</option>
              <option value="OVERTIME MEN PACKAGE">OVERTIME MEN PACKAGE</option>
              <option value="OVERTIME MENS PACKAGE(WITH BEARD)">OVERTIME MENS PACKAGE(WITH BEARD)</option>
              <option value="OVERTIME CHILDREN PACKAGE">OVERTIME CHILDREN PACKAGE</option>
            </Select>
            <Select placeholder="Select Time" value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </Select>
            <Button type="submit" colorScheme="blue" leftIcon={<FaCalendar />}>
              Book Appointment
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Booking;
