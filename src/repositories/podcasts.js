import config from '../config';

function create(obj) {
  return fetch(`${config.URL}/videos?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível cadastrar os dados :(');
  });
}

export default {
  create,
};
