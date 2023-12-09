import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  Stack,
  Input,
  StackDivider,
  Text,
  Button,
  Link,
  Flex,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logarUsuario } from "../../services/usuario/usuario";

const LoginUsuario = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const usuario = localStorage?.getItem("usuario");
  async function login() {
    try {
      const response = await logarUsuario({ email, senha });
      console.log(response);
      localStorage.setItem("usuario", JSON.stringify(response));
      navigate("/eventos");
    } catch (e) {
      console.log(e);
    }
  }
  if (usuario) {
    navigate("/eventos");
  }
  return (
    <>
      <Box pt={20} pl={28} cursor="default" display="flex" alignItems="center">
        <Icon as={FaLeaf} color="primary" fontSize="2rem" />
        <Box mt={1} as="span" ml="2" color="primary" fontSize="1.8rem">
          Ecoinfo
        </Box>
      </Box>
      <Container py="7rem" maxWidth="512px" width="100%">
        <Card bg="primary" p="2rem">
          <CardHeader>
            <Heading color="tertiary" size="md">
              Login
            </Heading>
            <Text color="tertiary " pt="2" fontSize="sm">
              Continue e transforme o mundo com Ecoinfo
            </Text>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading color="tertiary" size="xs">
                  Email
                </Heading>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  color="tertiary"
                  my="1"
                  placeholder="Insira seu email"
                />
              </Box>
              <Box>
                <Heading color="tertiary" size="xs">
                  Senha
                </Heading>
                <Input
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  color="tertiary"
                  my="1"
                  type="password"
                  placeholder="Insira sua senha"
                />
              </Box>
              <Box>
                <Button
                  onClick={login}
                  background="tertiary"
                  color="primary"
                  width="100%"
                >
                  Login
                </Button>
              </Box>
            </Stack>
            <Flex py="5">
              <Text color="tertiary " pt="2" fontSize="sm">
                Não tem conta?
              </Text>
              <Link
                href="/cadastro"
                ml="1"
                color="quaternary"
                pt="2"
                fontSize="sm"
              >
                Clique aqui para criar
              </Link>
            </Flex>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default LoginUsuario;
