import React from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

const Register = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.100"
    >
      <Box
        p="8"
        width="400px"
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="white"
        boxShadow="md"
      >
        <form>
          <FormControl mt="4">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              variant="filled"
              size="md"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              variant="filled"
              size="md"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              variant="filled"
              size="md"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <Input
              type="tel"
              id="phone"
              name="phone"
              variant="filled"
              size="md"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="instagram">Instagram</FormLabel>
            <Input
              type="text"
              id="instagram"
              name="instagram"
              variant="filled"
              size="md"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="paypal">PayPal</FormLabel>
            <Input
              type="text"
              id="paypal"
              name="paypal"
              variant="filled"
              size="md"
            />
          </FormControl>
          <Button
            mt="8"
            colorScheme="blue"
            size="md"
            width="100%"
            variant="solid"
          >
            Registrarse
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
