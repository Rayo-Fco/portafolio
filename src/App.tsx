import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Router from './routers'

function App() {
  return (
    <>
    <Navbar />
    <Router />
    </>
  );
}

export default App;
