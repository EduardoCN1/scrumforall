import { FaUsers, FaPlusCircle, FaLightbulb, FaBell } from 'react-icons/fa';
import './TeamsSection.css';


const TeamsSection = () => {
  // Datos de ejemplo - reemplazar con datos reales
  const teams = [
    { id: 1, name: 'Equipo Desarrollo Web', project: 'Portal Universitario', role: 'Scrum Master' },
    { id: 2, name: 'Equipo Mobile', project: 'App Estudiantil', role: 'Developer' }
  ];

  const tips = [
    'La reunión diaria debe durar máximo 15 minutos',
    'Prioriza el backlog antes de cada sprint planning',
    'Usa métricas como velocidad para mejorar la estimación'
  ];

  return (
    <div className="projects-container">
      {/* Sección de Acciones Rápidas */}
      <section className="quick-actions">
        <h2>Gestión de Equipos</h2>
        <div className="action-cards">
          <div className="action-card join-team">
            <FaUsers className="action-icon" />
            <h3>Únete a un equipo</h3>
            <p>Busca equipos disponibles y solicita unirte</p>
            <button className="action-button">Explorar equipos</button>
          </div>
          
          <div className="action-card create-team">
            <FaPlusCircle className="action-icon" />
            <h3>Crea un nuevo equipo</h3>
            <p>Inicia un proyecto con tus compañeros</p>
            <button className="action-button">Crear equipo</button>
          </div>
        </div>
      </section>

      {/* Sección de Tus Equipos */}
      <section className="your-teams">
        <h2>Tus Equipos</h2>
        {teams.length > 0 ? (
          <div className="team-list">
            {teams.map(team => (
              <div key={team.id} className="team-card">
                <h3>{team.name}</h3>
                <p><strong>Proyecto:</strong> {team.project}</p>
                <p><strong>Tu rol:</strong> {team.role}</p>
                <button className="team-button">Ir al equipo</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-teams">Aún no formas parte de ningún equipo. ¡Únete o crea uno!</p>
        )}
      </section>

      {/* Sección de Recordatorios Scrum */}
      <section className="scrum-tips">
        <h2>Tips y Recordatorios Scrum</h2>
        <div className="tips-list">
          {tips.map((tip, index) => (
            <div key={index} className="tip-card">
              <FaLightbulb className="tip-icon" />
              <p>{tip}</p>
            </div>
          ))}
        </div>
        
        <div className="reminder-card">
          <FaBell className="reminder-icon" />
          <div>
            <h3>Próxima reunión</h3>
            <p>Sprint Planning - Mañana 10:00 AM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsSection;