import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';

import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Error404 } from './components/Error404';
import { Carrito } from './components/Carrito';

import './app.css';

import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';


function App() {
  const [count, setCount] = useState(0)

  return (<CartProvider>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Alimentos Saludables"/>} />

      <Route path='/category/:id' element={<ItemListContainer greeting="Alimentos Saludables"/>} />

      <Route path='/items/:id' element={<ItemDetailContainer/>} />

      <Route path='*' element={<Error404/>} />

      <Route path="/carrito" element={<Carrito/>}/>

    </Routes>
  
    {/*  */}
  </BrowserRouter>
  </CartProvider> );
  
}

export default App
