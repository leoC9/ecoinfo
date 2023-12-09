import { ChevronDownIcon } from '@chakra-ui/icons'
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { criarEvento } from '../../services/evento/evento'

const CadastroEvento = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'))
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    data: '',
    cidade: '',
    estado: '',
    organizacaoId: usuario.id,
  })
  const navigate = useNavigate()

  async function cadastrar() {
    try {
      await criarEvento(formData)
      navigate('/eventos')
      console.log('Cadastrado com sucesso')
    } catch (e) {
      console.log('Erro ao cadastrar', e)
    }
  }

  if (!usuario?.cnpj) {
    navigate('/')
    return
  }
  return (
    <>
      <Box
        display="flex"
        height="3.6rem"
        width="100%"
        px={2.5}
        alignItems="center"
        bg="tertiary"
        justifyContent="space-between"
      >
        <Box cursor="default" display="flex" alignItems="center">
          <Icon as={FaLeaf} color="primary" fontSize="md" />
          <Box mt={1} as="span" ml="2" color="primary" fontSize="md">
            Ecoinfo
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="2rem">
          {usuario?.cnpj && (
            <Box
              onClick={() => navigate('/eventos')}
              _hover={{ cursor: 'pointer', color: 'quaternary' }}
              as="span"
              color="primary"
              fontSize="md"
            >
              Listagem de eventos
            </Box>
          )}
          <Menu>
            <MenuButton
              color="primary"
              _hover={{ cursor: 'pointer', color: 'quaternary' }}
              as={Text}
              rightIcon={<ChevronDownIcon />}
            >
              {usuario?.nome || usuario?.razao_social}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  localStorage.removeItem('usuario')
                  navigate('/')
                }}
              >
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Container py="5rem" maxWidth="512px" width="100%">
        <Card bg="primary" p="2rem">
          <CardHeader>
            <Heading color="tertiary" size="md">
              Cadastro
            </Heading>
            <Text color="tertiary " pt="2" fontSize="sm">
              Crie o evento para sua organização
            </Text>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
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
                  placeholder="Insira o nome do evento"
                />
              </Box>
              <Box>
                <Heading color="tertiary" size="xs">
                  Descrição
                </Heading>
                <Input
                  value={formData.descricao}
                  onChange={(e) =>
                    setFormData({ ...formData, descricao: e.target.value })
                  }
                  color="tertiary"
                  my="1"
                  placeholder="Insira a descrição do evento"
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
                  Data
                </Heading>
                <Input
                  color="tertiary"
                  my="1"
                  placeholder="Insira sua data"
                  value={formData.data}
                  onChange={(e) =>
                    setFormData({ ...formData, data: e.target.value })
                  }
                />
              </Box>
              <Box>
                <Button
                  onClick={cadastrar}
                  background="tertiary"
                  color="primary"
                  width="100%"
                >
                  Criar Evento
                </Button>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default CadastroEvento
