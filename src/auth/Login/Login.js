import React, { useState } from 'react';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

   const handleSignUp = () => {
    navigate('/signup'); // Redirige a la ruta /signup
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    console.log('Login attempt with:', { email, password });
    // Redirigir al dashboard después de login exitoso
    navigate('/dashboard'); // Asegúrate de crear esta ruta después
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">
              <FaUser className="input-icon" />
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">
              <FaLock className="input-icon" />
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="auth-button">
            <FaSignInAlt /> Ingresar
          </button>
        </form>
        
        <div className="auth-footer">
          <p>¿No tienes una cuenta? <button onClick={handleSignUp} className="auth-switch-button">Regístrate</button></p>
        </div>
      </div>
    </div>
  );
};

export default Login;