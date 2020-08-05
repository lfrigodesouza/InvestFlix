import config from '../config';

function getAllWithVideos() {
  return fetch(`${config.URL}/categorias?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Erro ao obter dados do servidor');
  });
}

function getAll() {
  return fetch(`${config.URL}/categorias`).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Erro ao obter dados do servidor');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
