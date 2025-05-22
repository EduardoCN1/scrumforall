import React, { useState } from 'react';
import './header.css';
import logo from './logo.png';
import avatar from './avatar.png';
import UserPanel from '../UserPanel/UserPanel';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const navigate = useNavigate();

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <>
      <header className="app-header">
        {/* Logo */}
        <div className="logo-container">
          <img 
            src={logo} 
            alt="Logo" 
            className="logo" 
            onClick={() => navigate('/')} 
            style={{ cursor: 'pointer' }}
          />
          <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>ScrumForAll</h1>
        </div>

        {/* Barra de navegación */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">Proyectos</Link>
            </li>
            <li>
              <Link to="/teams" className="nav-link">Equipos</Link>
            </li>
            <li>
              <Link to="/sprints" className="nav-link">Sprints</Link>
            </li>
          </ul>
        </nav>

        {/* Área de usuario */}
        <div className="user-area" onClick={togglePanel}>
          <div className="user-info">
            <span className="user-name">Eduardo</span>
            <span className="user-role">Scrum Master</span>
          </div>
          <img 
            src={avatar} 
            alt="Avatar de usuario" 
            className="user-avatar"
            style={{ cursor: 'pointer' }}
          />
        </div>
      </header>

      <UserPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  );
}

export default Header;