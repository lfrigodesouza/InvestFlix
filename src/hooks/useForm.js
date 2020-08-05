import { useState } from 'react';

function useForm(valoresIniciais) {
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

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    onChangeHandler,
    valoresFormulario,
    clearForm,
  };
}

export default useForm;
