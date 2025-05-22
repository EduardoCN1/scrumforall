import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaUserPlus } from 'react-icons/fa';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
   const handleLogin = () => {
    navigate('/login'); // Redirige a la ruta /login
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar contraseñas y registrar
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('SignUp attempt with:', formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">
              <FaUser className="input-icon" />
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" />
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="confirmPassword">
              <FaLock className="input-icon" />
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="auth-button">
            <FaUserPlus /> Registrarse
          </button>
        </form>
        
        <div className="auth-footer">
          <p>¿Ya tienes una cuenta? <button onClick={handleLogin} className="auth-switch-button">Inicia Sesión</button></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;