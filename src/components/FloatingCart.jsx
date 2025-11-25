// src/components/FloatingCart.jsx
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/floatingcart.css";

function FloatingCart({ carrito }) {
  return (
    <Link to="/carrito" className="floating-cart">

      <FaShoppingCart className="floating-icon" />

      {carrito.length > 0 && (
        <span className="floating-count">{carrito.length}</span>
      )}
    </Link>
  );
}

export default FloatingCart;
