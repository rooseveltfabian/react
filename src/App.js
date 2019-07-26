import React from 'react';
import logo from './logo.svg';
import './App.css';
/* import ImagenF from './componentes/imagenCompo';
import MiPost from './componentes/miPost'
import AxiosAPI from './componentes/axiosAPI' */
import { BrowserRouter as Mirouter, Route, Link } from "react-router-dom";

import Tierra from './componentes/enlatierra';
import Espacio from './componentes/enelespacio';
import Navegacion from './componentes/navegacion'
import Midata from './componentes/midata';

function App() {
  return (

<Mirouter>
  <Navegacion />
  <Route path="/" exact component={Tierra} />
  <Route path="/espacio"  component={Espacio} />
  <Route path="/midata"  component={Midata} />
</Mirouter>

  );
}




/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AxiosAPI />
        <ImagenF />
        <MiPost />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
