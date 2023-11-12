import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';

import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Error404 } from './components/Error404';

import './app.css'
;
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  const [count, setCount] = useState(0)

  return (<BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Alimentos Saludables"/>} />

      <Route path='/category/:id' element={<ItemListContainer greeting="Alimentos Saludables"/>} />

      <Route path='/items/:id' element={<ItemDetailContainer/>} />

      <Route path='*' element={<Error404/>} />

    </Routes>
  
    {/*  */}
  </BrowserRouter> );
  
}

export default App
