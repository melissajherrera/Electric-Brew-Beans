import { useState } from "react";
import "../styles/about.css";

function About() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xwpjojdy", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage("Hubo un problema al enviar el mensaje.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("No se pudo conectar. Probá nuevamente.");
    }
  };

  return (
    <section className="about-page">
      <div className="about-overlay">

        {/* ========== HEADER GENERAL ========== */}
        <div className="about-header">
          <h1>Acerca de Electric Brew&Beans</h1>
          <p className="about-tagline">
            Donde el café y las estrellas se encuentran ☕✨
          </p>
        </div>

        {/* ========== BLOQUE SUPERIOR (texto + imagen) ========== */}
        <div className="about-layout">
          <div className="about-text">
            <h2>¿Quiénes somos?</h2>
            <p>
              En Electric Brew&Beans exploramos los mejores granos del universo
              para ofrecerte cafés de origen que iluminan tus días con energía
              galáctica. Creemos en la magia de los sabores y en la fuerza del aroma.
            </p>
            <p>
              Cada taza es una oportunidad para viajar a un rincón distinto del cosmos.
            </p>
          </div>

          <div className="about-image-card">
            <img
              src="/src/assets/cafes/alien.jpg"
              alt="Alien disfrutando café"
              className="about-image"
            />
            <p className="about-image-caption">
              “El café mantiene la galaxia en equilibrio.”
            </p>
          </div>
        </div>

        {/* ========== MAPA (UBICADO OPCIÓN B) ========== */}
        <div className="about-map">
          <h3>¿Dónde estamos?</h3>
          <p className="about-map-text">
            Nuestra base galáctica está cerca del Instituto Nuestra Señora de Luján del Buen Viaje.
          </p>

          <div className="about-map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6190947937916!2d-58.596058425148975!3d-34.563198455357885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb986a71f520b%3A0xaee3ced396c7fba8!2sInstituto%20Nuestra%20Se%C3%B1ora%20De%20Lujan%20Del%20Buen%20Viaje!5e0!3m2!1ses-419!2sar!4v1764034021134!5m2!1ses-419!2sar"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              title="Ubicación Electric Brew&Beans"
            ></iframe>
          </div>
        </div>

        {/* ========== FORMULARIO DE CONTACTO ========== */}
        <div className="about-contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3 className="form-title">Escribinos</h3>

            <div className="mb-4">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="motivo">Motivo</label>
              <select id="motivo" name="motivo" className="form-select">
                <option value="">Seleccioná una opción</option>
                <option value="consulta">Consulta general</option>
                <option value="sugerencia">Sugerencia de café</option>
                <option value="feedback">Feedback del sitio</option>
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                className="form-control textarea-mensaje"
                placeholder="Escribí tu mensaje acá..."
                required
              ></textarea>
            </div>

            <input
              type="hidden"
              name="_subject"
              value="Nuevo mensaje desde Electric Brew&Beans"
            />

            <button
              type="submit"
              className="btn btn-primary w-100 mt-2"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "success" && (
              <p className="mt-3 text-success small">✔ ¡Mensaje enviado!</p>
            )}

            {status === "error" && (
              <p className="mt-3 text-danger small">{errorMessage}</p>
            )}
          </form>
        </div>

        {/* ========== FRASE FINAL ========== */}
        <div className="about-footer">
          <p>Hecho con mucha cafeína y un toque intergaláctico. ✨</p>
        </div>

      </div>
    </section>
  );
}

export default About;