import React, { useState } from 'react';
import { FaPlay, FaStop, FaCalendarAlt, FaChartLine, FaTasks, FaUserCheck,FaPlusCircle } from 'react-icons/fa';
import './SprintsSection.css';

const SprintsSection = () => {
  // Datos de ejemplo - reemplazar con datos reales
  const [activeSprint, setActiveSprint] = useState(1);
  const [sprints, setSprints] = useState([
    {
      id: 1,
      name: 'Sprint 1 - Autenticación',
      goal: 'Implementar sistema de autenticación',
      duration: '2 semanas',
      startDate: '2023-11-01',
      endDate: '2023-11-14',
      status: 'En progreso',
      tasks: [
        { id: 1, title: 'Diseñar formulario login', assignedTo: 'Juan Pérez', status: 'Completada' },
        { id: 2, title: 'Implementar API auth', assignedTo: 'María García', status: 'En progreso' },
        { id: 3, title: 'Crear componente registro', assignedTo: 'Tú', status: 'Pendiente' }
      ]
    },
    {
      id: 2,
      name: 'Sprint 2 - Dashboard',
      goal: 'Crear panel principal',
      duration: '1 semana',
      startDate: '2023-11-15',
      endDate: '2023-11-21',
      status: 'Planificado'
    }
  ]);

  const startSprint = (sprintId) => {
    setSprints(sprints.map(s => 
      s.id === sprintId ? {...s, status: 'En progreso'} : s
    ));
    setActiveSprint(sprintId);
  };

  const completeTask = (taskId) => {
    setSprints(sprints.map(s => ({
      ...s,
      tasks: s.tasks?.map(t => 
        t.id === taskId ? {...t, status: 'Completada'} : t
      )
    })));
  };

  return (
    <div className="sprints-container">
      {/* Encabezado y acciones */}
      <section className="sprints-header">
        <h1>Gestión de Sprints</h1>
        <button className="create-sprint-btn">
          <FaPlusCircle /> Crear Nuevo Sprint
        </button>
      </section>

      {/* Listado de Sprints */}
      <section className="sprints-list">
        <h2>Tus Sprints</h2>
        <div className="sprint-cards">
          {sprints.map(sprint => (
            <div 
              key={sprint.id} 
              className={`sprint-card ${sprint.status.toLowerCase().replace(' ', '-')} ${activeSprint === sprint.id ? 'active' : ''}`}
            >
              <div className="sprint-info">
                <h3>{sprint.name}</h3>
                <p><strong>Objetivo:</strong> {sprint.goal}</p>
                <p><FaCalendarAlt /> {sprint.startDate} - {sprint.endDate} ({sprint.duration})</p>
                <span className={`sprint-status ${sprint.status.toLowerCase().replace(' ', '-')}`}>
                  {sprint.status}
                </span>
              </div>
              
              <div className="sprint-actions">
                {sprint.status === 'Planificado' && (
                  <button 
                    className="start-sprint-btn"
                    onClick={() => startSprint(sprint.id)}
                  >
                    <FaPlay /> Iniciar Sprint
                  </button>
                )}
                {sprint.status === 'En progreso' && (
                  <button className="complete-sprint-btn">
                    <FaStop /> Finalizar Sprint
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detalles del Sprint Activo */}
      {sprints.find(s => s.id === activeSprint) && (
        <section className="active-sprint-details">
          <h2>Detalles del Sprint: {sprints.find(s => s.id === activeSprint).name}</h2>
          
          {/* Tablero Kanban */}
          <div className="kanban-board">
            <div className="kanban-column">
              <h3>Pendiente</h3>
              {sprints.find(s => s.id === activeSprint).tasks
                ?.filter(t => t.status === 'Pendiente')
                .map(task => (
                  <div key={task.id} className="task-card">
                    <h4>{task.title}</h4>
                    <p><FaUserCheck /> {task.assignedTo}</p>
                    <button 
                      className="start-task-btn"
                      onClick={() => completeTask(task.id)}
                    >
                      Iniciar Tarea
                    </button>
                  </div>
                ))}
            </div>
            
            <div className="kanban-column">
              <h3>En Progreso</h3>
              {sprints.find(s => s.id === activeSprint).tasks
                ?.filter(t => t.status === 'En progreso')
                .map(task => (
                  <div key={task.id} className="task-card">
                    <h4>{task.title}</h4>
                    <p><FaUserCheck /> {task.assignedTo}</p>
                    <button 
                      className="complete-task-btn"
                      onClick={() => completeTask(task.id)}
                    >
                      Completar Tarea
                    </button>
                  </div>
                ))}
            </div>
            
            <div className="kanban-column">
              <h3>Completadas</h3>
              {sprints.find(s => s.id === activeSprint).tasks
                ?.filter(t => t.status === 'Completada')
                .map(task => (
                  <div key={task.id} className="task-card completed">
                    <h4>{task.title}</h4>
                    <p><FaUserCheck /> {task.assignedTo}</p>
                    <span className="completed-badge">✓ Completada</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Métricas del Sprint */}
          <div className="sprint-metrics">
            <div className="metric-card">
              <FaChartLine className="metric-icon" />
              <h3>Progreso del Sprint</h3>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: '65%' }}
                >
                  <span>65%</span>
                </div>
              </div>
            </div>
            
            <div className="metric-card">
              <FaTasks className="metric-icon" />
              <h3>Tareas</h3>
              <p>Total: 3</p>
              <p>Completadas: 1</p>
              <p>En progreso: 1</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SprintsSection;