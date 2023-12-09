import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";

import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyC1VbCFslRK8hU3B5Ur8HhenVx_MGp9R7Y",
  authDomain: "alimentos-omega.firebaseapp.com",
  projectId: "alimentos-omega",
  storageBucket: "alimentos-omega.appspot.com",
  messagingSenderId: "141379059001",
  appId: "1:141379059001:web:f4d57fd2b3dd71c578fce8"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
