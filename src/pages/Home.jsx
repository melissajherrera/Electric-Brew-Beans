import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <>
      {}
      <section className="home-container">
        <div className="home-left">
          <h1 className="home-title">Somos Electric brew&beans</h1>

          <p className="home-subtitle">
            Tu tiendita de cafés de origen ☕✨
          </p>

          <Link to="/cafes" className="home-btn">
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* =============================
          NUESTRA MISIÓN (LIMPIO)
      ============================== */}
      <section className="home-mission">
        <h2 className="section-title">Nuestra Misión</h2>

        <p className="mission-text">
        Nuestro café tostado es tu portal personal a una nueva dimensión. Seleccionamos y tostamos 
        con precisión estelar para que, 
        desde el primer aroma al moler, hasta el último sorbo, sientas la energía de otro planeta.
        </p>
      </section>

      {/* =============================
          NUESTROS PILARES
      ============================== */}
      <section className="home-pillars">
        <h2 className="section-title">Nuestro Compromiso</h2>

        <div className="pillars-grid">

          <div className="pillar-card">
            <h3>Origen</h3>
            <p>
              Cafés con perfiles equilibrados y trazables.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Proceso</h3>
            <p>
              Tueste y trabajo cuidado para lograr consistencia.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Experiencia</h3>
            <p>
              Una marca clara y moderna, enfocada en lo visual.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;


