import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  Input,
  StackDivider,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaLeaf } from "react-icons/fa";

const Cadastro = () => {
  return (
    <>
      //Logo do Ecoinfo
      <Box pt={20} pl={28} cursor="default" display="flex" alignItems="center">
        <Icon as={FaLeaf} color="primary" fontSize="2rem" />
        <Box mt={1} as="span" ml="2" color="primary" fontSize="1.8rem">
          Ecoinfo
        </Box>
      </Box>
      //Card de cadastro
      <Container py="5rem" maxWidth="512px" width="100%">
        <Card bg="primary" p="2rem">
          <CardHeader>
            <Heading color="tertiary" size="md">
              Cadastro
            </Heading>
            <Text color="tertiary " pt="2" fontSize="sm">
              Crie sua conta gratuita
            </Text>
          </CardHeader>
          //Área de campos de texto para o cadastro
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading color="tertiary" size="xs">
                  CPF
                </Heading>
                <Input color="tertiary" my="1" placeholder="Insira seu CPF" />
              </Box>
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
                  Cidade
                </Heading>
                <Input
                  color="tertiary"
                  my="1"
                  placeholder="Insira sua cidade"
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
              //Botão de cadastro
              <Box>
                <Button background="tertiary" color="primary" width="100%">
                  Criar conta
                </Button>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Cadastro;
