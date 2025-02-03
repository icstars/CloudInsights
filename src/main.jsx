import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login /> */}
    <App />
  </StrictMode>,
)

