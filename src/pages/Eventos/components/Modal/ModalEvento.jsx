import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import {
  contarParticipantesPorEvento,
  participarEvento,
} from "../../../../services/evento/evento";

const ModalEvento = ({
  isOpen,
  onClose,
  title,
  image,
  description,
  eventoId,
  participantes,
  cidade,
  estado,
  data,
}) => {
  const usuario = JSON?.parse(localStorage.getItem("usuario"));
  async function participar() {
    try {
      await participarEvento(usuario.id, eventoId);
      onClose();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="primary" width="40rem">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container display="flex" width="26rem" flexDirection="column">
            <Image src={image} width="100%" />
            <Box display="flex" gap="48px" alignItems="center">
              <Box display="flex" mt="1" alignItems="center">
                <Icon as={IoPersonSharp} color="quaternary" />
                <Box as="span" ml={1} mt={1} color="gray.600" fontSize="sm">
                  {participantes ? participantes : 0} participantes
                </Box>
              </Box>
              <Box display="flex" mt="1" alignItems="center">
                <Icon as={MdPlace} color="quaternary" />
                <Box as="span" ml={1} mt={1} color="gray.600" fontSize="sm">
                  {cidade}, {estado}
                </Box>
              </Box>
              <Box display="flex" mt="1" alignItems="center">
                <CalendarIcon color="quaternary" />
                <Box as="span" ml={1} mt={1} color="gray.600" fontSize="sm">
                  {data}
                </Box>
              </Box>
            </Box>
            <Text mt={4}>{description}</Text>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button bg="quaternary" color="primary" mr={3} onClick={onClose}>
            Fechar
          </Button>
          {!usuario?.cnpj && (
            <Button onClick={participar} bg="tertiary" color="primary">
              Participar
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEvento;
