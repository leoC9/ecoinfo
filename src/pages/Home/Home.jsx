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
import React from "react";
import { FaLeaf } from "react-icons/fa";

const Home = () => {
  return (
    <>
      //Logo do Ecoinfo
      <Box pt={20} pl={28} cursor="default" display="flex" alignItems="center">
        <Icon as={FaLeaf} color="primary" fontSize="2rem" />
        <Box mt={1} as="span" ml="2" color="primary" fontSize="1.8rem">
          Ecoinfo
        </Box>
      </Box>
      //Card de login
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
          //Área de campos de texto para o login
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading color="tertiary" size="xs">
                  Usuário
                </Heading>
                <Input
                  color="tertiary"
                  my="1"
                  placeholder="Insira seu nome de usuário"
                />
              </Box>
              <Box>
                <Heading color="tertiary" size="xs">
                  Senha
                </Heading>
                <Input
                  color="tertiary"
                  my="1"
                  type="password"
                  placeholder="Insira sua senha"
                />
              </Box>
              //Botão de login
              <Box>
                <Button background="tertiary" color="primary" width="100%">
                  Login
                </Button>
              </Box>
            </Stack>
            //Link para cadastro
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

export default Home;
