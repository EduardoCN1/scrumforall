import React, { useState } from 'react';
import './UserPanel.css';
import avatar from './avatar.png';
import { 
  FaUser, FaCog, FaLock, FaPalette, FaSignOutAlt, 
  FaTimes, FaChevronDown, FaChevronUp 
} from 'react-icons/fa';

const UserPanel = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="user-panel-overlay" onClick={onClose}>
      <div className="user-panel" onClick={(e) => e.stopPropagation()}>
        <div className="user-panel-header">
          <h3>Configuración de cuenta</h3>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="user-info-summary">
          <img src={avatar} alt="Usuario" className="panel-avatar" />
          <div>
            <h4>Eduardo</h4>
            <p>Scrum Master</p>
            <p>eduardo@example.com</p>
          </div>
        </div>
        
        <nav className="user-menu">
          <ul>
            {/* Sección Perfil */}
            <li>
              <button 
                className={`menu-item ${activeSection === 'profile' ? 'active' : ''}`}
                onClick={() => toggleSection('profile')}
              >
                <FaUser className="menu-icon" />
                <span>Perfil</span>
                {activeSection === 'profile' ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeSection === 'profile' && (
                <div className="section-content">
                  <form>
                    <div className="form-group">
                      <label>Nombre</label>
                      <input type="text" defaultValue="Eduardo" />
                    </div>
                    <div className="form-group">
                      <label>Apellido</label>
                      <input type="text" defaultValue="Cortés" />
                    </div>
                    <div className="form-group">
                      <label>Correo electrónico</label>
                      <input type="email" defaultValue="eduardo@example.com" />
                    </div>
                    <div className="form-group">
                      <label>Matricula</label>
                      <input type="text" defaultValue="20204985739" />
                    </div>
                    <button type="submit" className="save-btn">Guardar cambios</button>
                  </form>
                </div>
              )}
            </li>

            {/* Sección Configuración */}
            <li>
              <button 
                className={`menu-item ${activeSection === 'settings' ? 'active' : ''}`}
                onClick={() => toggleSection('settings')}
              >
                <FaCog className="menu-icon" />
                <span>Configuración</span>
                {activeSection === 'settings' ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeSection === 'settings' && (
                <div className="section-content">
                  <form>
                    <div className="form-group">
                      <label>Idioma</label>
                      <select>
                        <option>Español</option>
                        <option>English</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Zona horaria</label>
                      <select>
                        <option>GMT-6 (Centro)</option>
                        <option>GMT-5 (Este)</option>
                      </select>
                    </div>
                    <button type="submit" className="save-btn">Guardar preferencias</button>
                  </form>
                </div>
              )}
            </li>

            {/* Sección Seguridad */}
            <li>
              <button 
                className={`menu-item ${activeSection === 'security' ? 'active' : ''}`}
                onClick={() => toggleSection('security')}
              >
                <FaLock className="menu-icon" />
                <span>Seguridad</span>
                {activeSection === 'security' ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeSection === 'security' && (
                <div className="section-content">
                  <form>
                    <div className="form-group">
                      <label>Contraseña actual</label>
                      <input type="password" />
                    </div>
                    <div className="form-group">
                      <label>Nueva contraseña</label>
                      <input type="password" />
                    </div>
                    <div className="form-group">
                      <label>Confirmar nueva contraseña</label>
                      <input type="password" />
                    </div>
                    <button type="submit" className="save-btn">Cambiar contraseña</button>
                  </form>
                </div>
              )}
            </li>

            {/* Sección Apariencia */}
            <li>
              <button 
                className={`menu-item ${activeSection === 'appearance' ? 'active' : ''}`}
                onClick={() => toggleSection('appearance')}
              >
                <FaPalette className="menu-icon" />
                <span>Apariencia</span>
                {activeSection === 'appearance' ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeSection === 'appearance' && (
                <div className="section-content">
                  <form>
                    <div className="form-group">
                      <label>Tema</label>
                      <div className="theme-options">
                        <label>
                          <input type="radio" name="theme" defaultChecked /> Claro
                        </label>
                        <label>
                          <input type="radio" name="theme" /> Oscuro
                        </label>
                        <label>
                          <input type="radio" name="theme" /> Sistema
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="save-btn">Aplicar cambios</button>
                  </form>
                </div>
              )}
            </li>

            {/* Cerrar sesión */}
            <li>
              <button className="menu-item logout">
                <FaSignOutAlt className="menu-icon" />
                <span>Cerrar sesión</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserPanel;