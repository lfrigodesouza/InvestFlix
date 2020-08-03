import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [valoresFormulario, setValoresFormulario] = useState(valoresIniciais);

  function setValue(key, value) {
    setValoresFormulario({
      ...valoresFormulario,
      [key]: value,
    });
  }

  function onChangeHandler(evt) {
    const { value } = evt.target;
    setValue(evt.target.getAttribute('name'), value);
  }

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
          setValoresFormulario(valoresIniciais);
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

      <ul>
        {categorias.map((categoria) => <li key={`${categoria.nome}`}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
