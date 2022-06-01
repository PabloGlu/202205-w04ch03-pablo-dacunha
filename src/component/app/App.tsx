import React from 'react';
import { crearPersonajes } from '../../servicios/personajes';
import { Lista } from '../lista/index';

import './App.css';

function App() {
    const personajes = crearPersonajes();
    console.log(personajes);
  return (
    <div className="App">
       <Lista personajes={personajes}/>

    </div>
  );
}

export default App;
