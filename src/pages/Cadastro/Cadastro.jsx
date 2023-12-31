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
import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../services/usuario/usuario";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    cidade: "",
    estado: "",
  });
  const navigate = useNavigate();

  async function cadastrar() {
    try {
      await cadastrarUsuario(formData);
      navigate("/");
      console.log("Cadastrado com sucesso");
    } catch (e) {
      console.log("Erro ao cadastrar", e);
    }
  }
  return (
    <>
      <Box pt={10} pl={28} cursor="default" display="flex" alignItems="center">
        <Icon as={FaLeaf} color="primary" fontSize="2rem" />
        <Box mt={1} as="span" ml="2" color="primary" fontSize="1.8rem">
          Ecoinfo
        </Box>
      </Box>
      <Container py="2rem" maxWidth="512px" width="100%">
        <Card bg="primary" p="2rem">
          <CardHeader>
            <Heading color="tertiary" size="md">
              Cadastro
            </Heading>
            <Text color="tertiary " pt="2" fontSize="sm">
              Crie sua conta gratuita
            </Text>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading color="tertiary" size="xs">
                  CPF
                </Heading>
                <Input
                  value={formData.cpf}
                  onChange={(e) =>
                    setFormData({ ...formData, cpf: e.target.value })
                  }
                  color="tertiary"
                  my="1"
                  placeholder="Insira seu CPF"
                />
              </Box>
              <Box>
                <Heading color="tertiary" size="xs">
                  Nome
                </Heading>
                <Input
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  color="tertiary"
                  my="1"
                  placeholder="Insira seu nome"
                />
              </Box>
              <Box>
                <Heading color="tertiary" size="xs">
                  Email
                </Heading>
                <Input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  color="tertiary"
                  my="1"
                  placeholder="Insira seu email"
                />
              </Box>
              <Box>
                <Heading color="tertiary" size="xs">
                  Cidade
                </Heading>
                <Input
                  value={formData.cidade}
                  onChange={(e) =>
                    setFormData({ ...formData, cidade: e.target.value })
                  }
                  color="tertiary"
                  my="1"
                  placeholder="Insira sua cidade"
                />
              </Box>
              <Box>
                <Heading color="tertiary" size="xs">
                  Estado
                </Heading>
                <Input
                  color="tertiary"
                  my="1"
                  placeholder="Insira seu estado"
                  value={formData.estado}
                  onChange={(e) =>
                    setFormData({ ...formData, estado: e.target.value })
                  }
                />
              </Box>
              <Box>
                <Heading color="tertiary" size="xs">
                  Senha
                </Heading>
                <Input
                  value={formData.senha}
                  onChange={(e) =>
                    setFormData({ ...formData, senha: e.target.value })
                  }
                  color="tertiary"
                  my="1"
                  type="password"
                  placeholder="Insira sua senha"
                />
              </Box>
              <Box>
                <Button
                  onClick={cadastrar}
                  background="tertiary"
                  color="primary"
                  width="100%"
                >
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
