import { CalendarIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { MdPlace } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import {
  Box,
  Container,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoPersonSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import ModalEvento from "./components/Modal/ModalEvento";
import {
  buscarEventos,
  contarParticipantesPorEvento,
} from "../../services/evento/evento";
import { useNavigate } from "react-router-dom";

const Eventos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [eventosMap, setEventos] = useState([]);
  const [eventoId, setEventoId] = useState(null);
  const [participants, setParticipants] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [data, setData] = useState("");
  const usuario = JSON?.parse(localStorage.getItem("usuario"));

  const imageUrl =
    "https://img.tribunahoje.com/5p_bAiy6II9HQxGTprujYJjzlRk=/840x520/smart/s3.tribunahoje.com/uploads/imagens/construindo-alagoas-sustentavel-3.jpg";

  const onChangeEvent = async (
    title,
    description,
    image,
    eventId,
    cidade,
    estado,
    data
  ) => {
    setTitle(title);
    setDescription(description);
    setImage(image);
    setCidade(cidade);
    setEventoId(eventId);
    setEstado(estado);
    setData(data);
    const response = await contarParticipantesPorEvento(eventId);
    setParticipants(response?.participantes);
    onOpen();
  };

  useEffect(() => {
    buscarEventos().then((res) => {
      console.log(res);
      setEventos(res.data);
    });
  }, []);

  const navigate = useNavigate();
  if (!usuario?.id) {
    navigate("/");
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
              onClick={() => navigate("/criarEvento")}
              _hover={{ cursor: "pointer", color: "quaternary" }}
              as="span"
              color="primary"
              fontSize="md"
            >
              Criar evento
            </Box>
          )}
          <Menu>
            <MenuButton
              color="primary"
              _hover={{ cursor: "pointer", color: "quaternary" }}
              as={Text}
              rightIcon={<ChevronDownIcon />}
            >
              {usuario?.nome || usuario?.razao_social}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("usuario");
                  navigate("/");
                }}
              >
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Container
        mt={5}
        w="100%"
        maxW="70%"
        display="flex"
        flexDirection="column"
        bg="secondary"
        alignItems="center"
        justifyContent="center"
      >
        <Box as="span" ml="2" color="primary" fontSize="lg" fontWeight="bold">
          Listagem de eventos
        </Box>
        <Container
          w="100%"
          display="flex"
          bg="secondary"
          maxW="100%"
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {eventosMap.map((data, i) => (
            <Box
              key={i}
              bg="primary"
              maxW="sm"
              borderWidth="1px"
              m="2.5rem"
              borderRadius="lg"
              onClick={() =>
                onChangeEvent(
                  data.nome,
                  data.descricao,
                  imageUrl,
                  data.id,
                  data.cidade,
                  data.estado,
                  data.data
                )
              }
              _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
              overflow="hidden"
            >
              <Image src={imageUrl} />

              <Box p="6">
                <Box
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {data.nome}
                </Box>
                <Box display="flex" mt="1" alignItems="center">
                  <Icon as={MdPlace} color="quaternary" />
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {data.cidade}, {data.estado}
                  </Box>
                </Box>
                <Box display="flex" mt={1} alignItems="center">
                  <CalendarIcon color="quaternary" />
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {data.data}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
        <ModalEvento
          isOpen={isOpen}
          onClose={onClose}
          title={title}
          image={image}
          description={description}
          eventoId={eventoId}
          participantes={participants}
          cidade={cidade}
          estado={estado}
          data={data}
        />
      </Container>
    </>
  );
};

export default Eventos;
