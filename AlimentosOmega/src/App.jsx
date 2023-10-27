import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './app.css'


function App() {
  const [count, setCount] = useState(0)

  return <>
  <NavBar/>
  <ItemListContainer greeting="Alimentos Saludables"/>
  </>;
}

export default App
