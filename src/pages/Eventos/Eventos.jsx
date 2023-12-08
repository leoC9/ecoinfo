import { CalendarIcon, ChevronDownIcon, StarIcon } from "@chakra-ui/icons";
import { MdPlace } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import {
  Badge,
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
import React, { useState } from "react";
import ModalEvento from "./components/Modal/ModalEvento";

const Eventos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [participants, setParticipants] = useState("");
  const [local, setLocal] = useState("");
  const [date, setDate] = useState("");

  const event = [
    {
      imageUrl:
        "https://img.tribunahoje.com/5p_bAiy6II9HQxGTprujYJjzlRk=/840x520/smart/s3.tribunahoje.com/uploads/imagens/construindo-alagoas-sustentavel-3.jpg",
      imageAlt: "Rear view of modern home with pool",
      title: "Reeducação do plantio na praça",
      participants: "18",
      local: "Salto, SP",
      date: "14/01/2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageUrl:
        "https://img.tribunahoje.com/5p_bAiy6II9HQxGTprujYJjzlRk=/840x520/smart/s3.tribunahoje.com/uploads/imagens/construindo-alagoas-sustentavel-3.jpg",
      imageAlt: "Rear view of modern home with pool",
      title: "Reeducação do plantio na praça",
      participants: "$25",
      local: "Salto, SP",
      date: "14/01/2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageUrl:
        "https://img.tribunahoje.com/5p_bAiy6II9HQxGTprujYJjzlRk=/840x520/smart/s3.tribunahoje.com/uploads/imagens/construindo-alagoas-sustentavel-3.jpg",
      imageAlt: "Rear view of modern home with pool",
      title: "Reeducação do plantio na praça",
      participants: "39",
      local: "Salto, SP",
      date: "14/01/2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageUrl:
        "https://img.tribunahoje.com/5p_bAiy6II9HQxGTprujYJjzlRk=/840x520/smart/s3.tribunahoje.com/uploads/imagens/construindo-alagoas-sustentavel-3.jpg",
      imageAlt: "Rear view of modern home with pool",
      title: "Reeducação do plantio na praça",
      participants: "50",
      local: "Salto, SP",
      date: "14/01/2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const onChangeEvent = (title, description, image) => {
    setTitle(title);
    setDescription(description);
    setImage(image);
    onOpen();
  };

  return (
    <>
      //Navbar do site
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
        <Menu>
          <MenuButton
            color="primary"
            _hover={{ cursor: "pointer", color: "quaternary" }}
            as={Text}
            rightIcon={<ChevronDownIcon />}
          >
            Leo
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      //Conteudo da tela
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
          Listagem de enventos
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
          //Listagem de eventos mapeados
          {event.map((data, i) => (
            <Box
              key={i}
              bg="primary"
              maxW="sm"
              borderWidth="1px"
              m="2.5rem"
              borderRadius="lg"
              onClick={() =>
                onChangeEvent(data.title, data.description, data.imageUrl)
              }
              _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
              overflow="hidden"
            >
              <Image src={data.imageUrl} alt={data.imageAlt} />

              <Box p="6">
                <Box
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {data.title}
                </Box>
                <Box display="flex" mt="1" alignItems="center">
                  <Icon as={MdPlace} color="quaternary" />
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    Salto, SP
                  </Box>
                </Box>
                <Box display="flex" mt={1} alignItems="center">
                  <CalendarIcon color="quaternary" />
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    12/01/2024
                  </Box>
                </Box>
                <Box display="flex" mt="1" alignItems="center">
                  <Icon as={IoPersonSharp} color="quaternary" />
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    35 participants
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
        //Modal de evento
        <ModalEvento
          isOpen={isOpen}
          onClose={onClose}
          title={title}
          image={image}
          description={description}
        />
      </Container>
    </>
  );
};

export default Eventos;
