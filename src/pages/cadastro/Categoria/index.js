import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { onChangeHandler, valoresFormulario, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://podflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (res) => {
        const response = await res.json();
        setCategorias([...response]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valoresFormulario.nome}
      </h1>

      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setCategorias([...categorias, valoresFormulario]);
          clearForm();
        }}
      >

        <FormField
          type="text"
          name="nome"
          label="Nome da Categoria"
          value={valoresFormulario.nome}
          onChange={onChangeHandler}
        />

        <FormField
          type="textarea"
          name="descricao"
          label="Descrição"
          value={valoresFormulario.descricao}
          onChange={onChangeHandler}
        />

        <FormField
          type="color"
          name="cor"
          label="Cor"
          value={valoresFormulario.cor}
          onChange={onChangeHandler}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}
      <ul>
        {categorias.map((categoria) => <li key={`${categoria.nome}`}>{categoria.titulo}</li>)}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
