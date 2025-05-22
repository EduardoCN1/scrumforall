import { FaProjectDiagram, FaPlusCircle, FaLightbulb, FaBell } from 'react-icons/fa';
import './ProjectsSection.css';

const ProjectsSection = () => {
  // Datos de ejemplo - reemplazar con datos reales
  const myProjects = [
    { id: 1, name: 'Portal Universitario', team: 'Equipo Desarrollo Web', progress: 65 },
    { id: 2, name: 'App Estudiantil', team: 'Equipo Mobile', progress: 30 }
  ];

  const tips = [
    'Define bien tu Product Backlog antes de iniciar el sprint',
    'Mantén las Daily Standups enfocadas en el progreso',
    'Usa retrospectivas para mejorar continuamente'
  ];

  return (
    <div className="projects-container">
      {/* Sección de Acciones Rápidas */}
      <section className="quick-actions">
        <h2>Gestión de Proyectos</h2>
        <div className="action-cards">
          <div className="action-card join-project">
            <FaProjectDiagram className="action-icon" />
            <h3>Únete a un proyecto</h3>
            <p>Busca proyectos disponibles y solicita unirte</p>
            <button className="action-button">Explorar proyectos</button>
          </div>
          
          <div className="action-card create-project">
            <FaPlusCircle className="action-icon" />
            <h3>Crea un nuevo proyecto</h3>
            <p>Inicia un proyecto Scrum con tu equipo</p>
            <button className="action-button">Crear proyecto</button>
          </div>
        </div>
      </section>

      {/* Sección de Mis Proyectos */}
      <section className="my-projects">
        <h2>Mis Proyectos</h2>
        {myProjects.length > 0 ? (
          <div className="project-list">
            {myProjects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p><strong>Equipo:</strong> {project.team}</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${project.progress}%` }}
                  >
                    <span>{project.progress}%</span>
                  </div>
                </div>
                <button className="project-button">Ir al proyecto</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-projects">Aún no participas en ningún proyecto. ¡Únete o crea uno!</p>
        )}
      </section>

      {/* Sección de Consejos Scrum */}
      <section className="scrum-tips">
        <h2>Consejos para tus Proyectos Scrum</h2>
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
            <h3>Próximo evento</h3>
            <p>Sprint Review - Mañana 11:00 AM</p>
            <p className="reminder-project">Proyecto: Portal Universitario</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;