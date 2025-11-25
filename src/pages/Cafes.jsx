import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/cafes.css";

function Cafes({ agregarAlCarrito }) {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((res) => res.json())
      .then((data) => {
        const seisCafesAPI = data.slice(0, 6);

        const titles = [
          "☕ Galactic Origin Blend",
          "☕ Nebula Dark Roast",
          "☕ Stardust Light Roast",
          "☕ Quantum Espresso Roast",
          "☕ Cosmic Caramel Fusion",
          "☕ Interstellar Midnight Roast",
        ];

        const descriptions = [
          "Notas dulces a caramelo y aroma floral.",
          "Café suave con leche vaporizada cremosa.",
          "Sabor intenso con espuma densa.",
          "Mezcla aterciopelada y suave.",
          "Chocolate y espresso fuerte.",
          "Chocolate y espresso fuerte.",
        ];

        const images = [
          "/src/assets/cafes/galacticOriginBlend.jpg",
          "/src/assets/cafes/nebulaDarkRoast.jpg",
          "/src/assets/cafes/stardustLightRoast.jpg",
          "/src/assets/cafes/quantumEspressoRoast.jpg",
          "/src/assets/cafes/cosmicCaramelFusion.jpg",
          "/src/assets/cafes/interestellar.jpg"
        ];

        const prices = [19500, 25000, 17700, 25000, 30000, 27000];

        const personalizados = seisCafesAPI.map((cafeAPI, i) => ({
          ...cafeAPI,

          // productos sin stock
          isDisabled: i === 3 || i === 4,

          title: titles[i],
          description: descriptions[i],
          image: images[i],
          price: prices[i],
        }));

        setCafes(personalizados);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar la API");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando cafés...</p>;
  if (error) return <p>{error}</p>;

  const filtrados = cafes.filter((cafe) =>
    cafe.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Catálogo de cafés</h2>

      <input
        type="text"
        placeholder="Buscar café..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="cafes-grid">
        {filtrados.map((cafe) => (
          <div
            key={cafe.id}
            className={`cafe-card ${cafe.isDisabled ? "card-disabled" : ""}`}
          >
            <img src={cafe.image} alt={`Imagen de café ${cafe.title}`} />

            <h3>{cafe.title}</h3>

            <p>{cafe.description}</p>

            <p className="precio">${cafe.price}</p>

            {cafe.isDisabled ? (
              <p className="sin-stock">AGOTADO - Detalles no disponibles</p>
            ) : (
              <>
                <button
                  className="btn-add pulse"
                  onClick={() => agregarAlCarrito(cafe)}
                >
                  Añadir al carrito
                </button>

                <Link to={`/cafe/${cafe.id}`} className="btn-ver">
                  Ver más
                </Link>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cafes;