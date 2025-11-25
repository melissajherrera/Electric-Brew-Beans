// src/components/FloatingWpp.jsx
import { FaWhatsapp } from "react-icons/fa";
import "../styles/floatingwpp.css";

function FloatingWpp() {
  return (
    <a
      href="https://wa.me/5491123456789"
      className="floating-wpp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp className="floating-wpp-icon" />
    </a>
  );
}

export default FloatingWpp;
