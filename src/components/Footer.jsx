// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">

      <div className="footer-content">

        {/* COLUMNA 1 */}
        <div className="footer-section">
          <h4 className="footer-title">Electric Brew&Beans ⚡☕</h4>
          <p>Tu portal intergaláctico hacia el café de especialidad.</p>

          <p className="footer-contact">
            Misión de Soporte:{" "}
            <a 
              href="mailto:contacto@electricbrewandbeans.com" 
              className="footer-link"
            >
              contacto@electricbrewandbeans.com
            </a>
          </p>
        </div>

        {/* COLUMNA 2 */}
        <div className="footer-section">
          <h4 className="footer-title">Navegación</h4>
          <ul className="footer-links">
            <li><Link to="/cafes" className="footer-link">Catálogo Estelar</Link></li>
            <li><Link to="/about" className="footer-link">Acerca de Nosotros</Link></li>
         
          </ul>
        </div>

        {/* COLUMNA 3 — REDES SOCIALES */}
        <div className="footer-section">
          <h4 className="footer-title">Universo Digital</h4>

          <div className="social-icons">

            {/* WHATSAPP */}
            <a 
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaWhatsapp size={26} />
            </a>

            {/* INSTAGRAM */}
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={26} />
            </a>

            {/* FACEBOOK */}
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook size={26} />
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Electric Brew&Beans | Todos los derechos reservados al Sector Gamma.
        </p>
      </div>

    </footer>
  );
}

export default Footer;