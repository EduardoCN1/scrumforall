import './footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ScrumForAll</h3>
          <p>Plataforma de gestión ágil para equipos de desarrollo</p>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/documentacion">Documentación</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>email: info@scrumforall.com</p>
          <p>teléfono: +52 123 456 7890</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ScrumForAll. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;