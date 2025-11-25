import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCart from "./components/FloatingCart";
import FloatingWpp from "./components/FloatingWpp";

import Home from "./pages/Home";
import Cafes from "./pages/Cafes";
import CafeDetail from "./pages/CafeDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito((prev) => [...prev, item]);
  };

  const vaciarCarrito = (nuevo = []) => setCarrito(nuevo);

  return (
    <>
      <Navbar carrito={carrito} />

      {/* ⭐ ICONOS FLOTANTES SIEMPRE VISIBLES */}
      <FloatingCart carrito={carrito} />
      <FloatingWpp />

      <main className="page-container" style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cafes"
            element={<Cafes agregarAlCarrito={agregarAlCarrito} />}
          />
          <Route
            path="/cafe/:id"
            element={<CafeDetail agregarAlCarrito={agregarAlCarrito} />}
          />
          <Route
            path="/carrito"
            element={<Cart carrito={carrito} vaciarCarrito={vaciarCarrito} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
