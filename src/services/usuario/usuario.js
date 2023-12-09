import api from "../api";

async function cadastrarUsuario(usuario) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/usuario/", usuario);
      console.log(response);
      return resolve(response);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
}

async function logarOrganizacao(usuario) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/organizacao/login", usuario);
      console.log(response);
      return resolve(response.data);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
}

async function logarUsuario(usuario) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/usuario/login", usuario);
      console.log(response);
      return resolve(response.data);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
}

export { cadastrarUsuario, logarUsuario, logarOrganizacao };
