import {
  Button,
  Container,
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
import React from "react";

const ModalEvento = ({ isOpen, onClose, title, image, description }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="primary" width="40rem">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        //Área com imagem e descrição do evento
        <ModalBody>
          <Container display="flex" width="26rem" flexDirection="column">
            <Image src={image} width="100%" />
            <Text mt={4}>{description}</Text>
          </Container>
        </ModalBody>
        //Botões de fechar e participar do evento
        <ModalFooter>
          <Button bg="quaternary" color="primary" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button bg="tertiary" color="primary">
            Participate
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEvento;
