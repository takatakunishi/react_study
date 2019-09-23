import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Item1 from './components/Item1.jsx';
import Item2 from './components/Item2.jsx';

function App() {
  return (
    <div id="container">
      <Header />
      <Nav />
      <Item1 />
      <Item2 />
    </div>
  );
}

export default App;
