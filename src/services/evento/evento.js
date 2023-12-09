import api from "../api";

async function buscarEventos() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.get("/evento/");
      console.log(response);
      return resolve(response);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
}

async function criarEvento(evento) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/evento/", evento);
      console.log(response);
      return resolve(response);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
}

async function participarEvento(usuarioId, eventoId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/eventoParticipante/", {
        usuarioId,
        eventoId,
      });
      console.log(response);
      return resolve(response);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
}

async function contarParticipantesPorEvento(eventoId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.get(`/eventoParticipante/${eventoId}`);
      console.log(response);
      return resolve(response?.data);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
}

export {
  buscarEventos,
  participarEvento,
  criarEvento,
  contarParticipantesPorEvento,
};
