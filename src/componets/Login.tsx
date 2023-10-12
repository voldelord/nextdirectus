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
import Link from "next/link";

const Login = () => {
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
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              type="text"
              id="username"
              name="username"
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
          <Button
            mt="8"
            mb="8"
            colorScheme="blue"
            size="md"
            width="100%"
            variant="solid"
          >
            Login
          </Button>
          <Link href="/register">
            <p className="font-semibold text-blue-600 cursor-pointer">
              Register
            </p>
          </Link>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
