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

const Home = () => {
  const navigate = useNavigate();
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
              Acesse o Ecoinfo
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Button
                  onClick={() => navigate("/loginUsuario")}
                  background="tertiary"
                  color="primary"
                  width="100%"
                >
                  Entre como usuário
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => navigate("/loginOrganizacao")}
                  background="tertiary"
                  color="primary"
                  width="100%"
                >
                  Entre como organização
                </Button>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Home;
