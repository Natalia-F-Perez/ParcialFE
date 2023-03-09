import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card';

function App() {
  const [name, setName] = useState("");
  const [estilo, setEstilo] = useState("");

  // Creamos una funcion para validar el nombre de usuario
  const validateName = (name) => {
  // Eliminamos los espacios en blanco
  const withoutSpaces = name.trim();
  // Validamos la extension
  if (wihtoutSpaces.length > 3) {
    return true;
  } else {
    return false;
  }
  };

  const validateEstilo = (estilo) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = estilo.trim();
  // Validamos la extension
  if (wihtoutSpaces.length > 6) {
    return true;
  } else {
    return false;
  }
  };


  // Creamos un manejador de eventos para cada uno de los inputs
  const onChangeName = (e) => setName(e.target.value);
  const onChangeEstilo = (e) => setEstilo(e.target.value);

  const onSubmitForm = (e) => {
    // Evitamos que se recargue la pagina previniendo el comportamiento por defecto
    e.preventDefault();

    // Realizamos las validaciones con los valores almacenados
    // en el estado
    const isNameValid = validateName(name);
    const isEstiloValid = validateEstilo(estilo);

    // Si al menos una de las validaciones es falsa
    // mostramos un mensaje de error
    if (!isEstiloValid || !isNameValid) {
      alert("Alguno de los datos ingresados no son correctos");
    } else {
    
    // Por ahora solo mostramos el nombre del usuario
    alert(`Bienvenido: ${name}`);
    };
  };

  return (
    <>
    <div className="App">
    <h3>Conociendote!! Que música te gusta mas?</h3>
    {/* Pasamos nuestro manejador al evento onSubmit */}
      <form onSubmit={onSubmitForm}>
        {/*
        Creamos dos inputs controlados
        pasando el estado como value y el manejador
        al evento onChange
        */}
        <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={onChangeName}
        />
        <input
        type="estilo"
        placeholder="Ingresa tu estlo de musica favorita"
        value={estilo}
        onChange={onChangeEstilo}
        />
        {/*
        Mediante el type nos aseguramos que
        se dispare el evento onSubmit al hacer click
        en el botón
        */}
        <button type="submit">Enviar</button>
        

      </form>
    </div>
    </>
  )
}

export default App