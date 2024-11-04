import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import menuIcon from './menu-icon.png';
import ItemDetalhe from './pages/ItemDetalhe';
import ListaItens from './pages/ListaItens';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img
          src={menuIcon}
          alt="Menu"
          className="toggle-button"
          onClick={toggleMenu}
        />
        <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={handleLinkClick}>Inicio</Link>
          </li>
          <li>
            <Link to="/lista-itens" onClick={handleLinkClick}>Lista de Itens</Link>
          </li>
        </ul>
        
      </div>

      <div className="content">
        <Routes>
          <Route path="/lista-itens" element={<ListaItens />} />
          <Route path="/item/:id" element={<ItemDetalhe />} />
          <Route path="/" element={<h1>Página Inicial</h1>} /> {/* Página Inicial */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
