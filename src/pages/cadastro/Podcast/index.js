import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import podcastsRepository from '../../../repositories/podcasts';
import categoriasRepository from '../../../repositories/categorias';

function CadastroPodcast() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const titulosCategorias = categorias.map((categoria) => categoria.titulo);
  const { onChangeHandler, valoresFormulario } = useForm({
    titulo: '',
    url: '',
    categoria: '',
    imagem: '',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categs) => {
      setCategorias(categs);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Podcast</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();

          const categoriaEscolhida = categorias.find(
            (categoria) => categoria.titulo === valoresFormulario.categoria,
          );

          podcastsRepository
            .create({
              titulo: valoresFormulario.titulo,
              url: valoresFormulario.url,
              imagem: valoresFormulario.imagem,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              history.push('/');
            });
        }}
      >
        <FormField
          type="text"
          name="titulo"
          label="Título do Podcast"
          value={valoresFormulario.titulo}
          onChange={onChangeHandler}
        />

        <FormField
          type="text"
          name="url"
          label="URL"
          value={valoresFormulario.url}
          onChange={onChangeHandler}
        />

        <FormField
          type="text"
          name="categoria"
          label="Categoria"
          value={valoresFormulario.categoria}
          suggestions={titulosCategorias}
          onChange={onChangeHandler}
        />

        <FormField
          type="text"
          name="imagem"
          label="Imagem"
          value={valoresFormulario.imagem}
          onChange={onChangeHandler}
        />

        <Button>Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroPodcast;
