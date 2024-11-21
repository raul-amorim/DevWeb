import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import menuIcon from './menu-icon.png';

import Usuario from './pages/Login';
import ItemDetalhe from './pages/ItemDetalhe';
import ListaItens from './pages/ListaItens';
import Usuario from './pages/Usuario';
import ListaCompras from './pages/ListaCompras';
import Carrinho from './pages/Carrinho';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroProduto from './pages/CadastroProduto';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api'; 

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
            <Link to="/login" onClick={handleLinkClick}>Login</Link>
          </li>
          <li>
            <Link to="/usuario" onClick={handleLinkClick}>Usuário</Link>
          </li>
          <li>
            <Link to="/cadastro-usuario" onClick={handleLinkClick}>Cadastro de Usuário</Link>
          </li>
          <li>
            <Link to="/cadastro-produto" onClick={handleLinkClick}>Cadastro de Produtos</Link>
          </li>
          <li>
            <Link to="/lista-itens" onClick={handleLinkClick}>Lista de Itens</Link>
          </li>
          <li>
            <Link to="/lista-compras" onClick={handleLinkClick}>Lista de Compras</Link>
          </li>
          <li>
            <Link to="/carrinho" onClick={handleLinkClick}>Carrinho</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/lista-compras" element={<ListaCompras />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
          <Route path="/lista-itens" element={<ListaItens />} />
          <Route path="/item/:id" element={<ItemDetalhe />} />
          <Route path="/" element={<h1>Página Inicial</h1>} /> {/* Página Inicial */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
