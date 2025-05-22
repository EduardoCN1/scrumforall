import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // Redirige a la ruta /login
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Bienvenido a ScrumForAll</h1>
        <p>La plataforma definitiva para la gestión de proyectos ágiles</p>
        <button className="cta-button" onClick={handleGetStarted}>
          Comenzar ahora
        </button>
      </section>
      
      {/* Resto del código permanece igual */}
      <section className="features-section">
        <h2>¿Qué ofrece nuestra plataforma?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Gestión de Proyectos</h3>
            <p>Organiza y sigue el progreso de todos tus proyectos Scrum en un solo lugar.</p>
          </div>
          
          <div className="feature-card">
            <h3>Seguimiento de Sprints</h3>
            <p>Planifica y monitoriza cada sprint con herramientas visuales intuitivas.</p>
          </div>
          
          <div className="feature-card">
            <h3>Colaboración en Equipo</h3>
            <p>Mantén a todo tu equipo sincronizado y comunicado.</p>
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <h2>Sobre ScrumForAll</h2>
        <p>
          ScrumForAll nació de la necesidad de tener una herramienta accesible para estudiantes
          que adoptan metodologías ágiles. Nuestra plataforma está diseñada para ser intuitiva 
          ,adecuada tanto para equipos nuevos en Scrum como para expertos.
        </p>
      </section>
    </div>
  );
};

export default Home;