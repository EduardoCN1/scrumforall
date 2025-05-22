import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import ProjectsSection from './components/projects/ProjectsSection';
import TeamsSection from './components/Teams/TeamsSection';
import SprintsSection from './components/Sprints/SprintsSection';

import Login from './auth/Login/Login';
import SignUp from './auth/SignUp/SignUp';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/teams" element={<TeamsSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/sprints" element={<SprintsSection />} />

            {/* Puedes añadir más rutas aquí */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;