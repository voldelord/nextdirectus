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
        width="300px"
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="white"
        boxShadow="md"
      >
        <Image
          src="URL_DE_TU_IMAGEN_DE_PERFIL"
          alt="Foto de perfil"
          mx="auto"
          borderRadius="full"
          boxSize="64px"
        />
        <form>
          <FormControl mt="4">
            <FormLabel htmlFor="username">Usuario</FormLabel>
            <Input
              type="text"
              id="username"
              name="username"
              variant="filled"
              size="md"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              variant="filled"
              size="md"
            />
          </FormControl>
          <Button
            mt="4"
            colorScheme="blue"
            size="md"
            width="100%"
            variant="solid"
          >
            Iniciar Sesión
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
