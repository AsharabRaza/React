

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from "./components/Main.js";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
       <Main />
    </div>
    </BrowserRouter>
  );
}

export default App;
