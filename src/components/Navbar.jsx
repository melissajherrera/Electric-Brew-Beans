import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ carrito }) {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src="/src/assets/cafes/hero.jpeg" alt="logo" />
        <span>Electric brew&beans</span>
      </div>

      <ul className="navbar-menu">

        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/cafes">Cafés</Link></li>

        <li>
          <Link to="/carrito" className="carrito-link">
            Carrito
            {carrito.length > 0 && (
              <span className="carrito-badge">{carrito.length}</span>
            )}
          </Link>
        </li>

        <li><Link to="/about">Nosotros</Link></li>

      </ul>

    </nav>
  );
}

export default Navbar;
