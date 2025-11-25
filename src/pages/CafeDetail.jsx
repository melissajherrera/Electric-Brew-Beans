import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/cafedetail.css";

function CafeDetail({ agregarAlCarrito }) {
  const { id } = useParams();
  const [cafe, setCafe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detallesPersonalizados = [
      {
        title: "☕ Galactic Origin Blend",
        description:
          "Mezcla de granos arábicos latinoamericanos tostados a punto medio. Aroma dulce, notas de cacao suave y un final limpio que “viaja” en boca como una órbita estable.",
        price: 19500,
        image: new URL("../assets/cafes/galacticOriginBlend.jpg", import.meta.url).href,
        origin: "Blend de Altura (Guatemala & Colombia)",
        process: "Lavado (Wet Process)",
        notes: "Cacao, Caramelo, Naranja",
      },
      {
        title: "☕ Nebula Dark Roast",
        description:
          "Tostado intenso con sabores profundos a chocolate amargo y caramelo oscuro. Cuerpo denso, ideal para quienes buscan la fuerza de un agujero negro… pero bebible.",
        price: 25000,
        image: new URL("../assets/cafes/nebulaDarkRoast.jpg", import.meta.url).href,
        origin: "Sumatra Mandheling (Indonesia)",
        process: "Semi-Lavado (Wet-Hulled)",
        notes: "Chocolate Amargo, Ahumado, Cedro",
      },
      {
        title: "☕ Stardust Light Roast",
        description:
          "Tostado claro con acidez brillante y notas frutales. Un café etéreo, delicado, casi como polvo de estrellas suspendido en el paladar.",
        price: 17700,
        image: new URL("../assets/cafes/stardustLightRoast.jpg", import.meta.url).href,
        origin: "Yirgacheffe (Etiopía)",
        process: "Lavado (Doble Fermentación)",
        notes: "Jazmín, Limón, Miel Silvestre",
      },
      {
        title: "☕ Quantum Espresso Roast",
        description:
          "Tostado especial para espresso, balance perfecto entre dulzor y amargor. Notas a nuez, azúcar mascabo y un toque eléctrico en el retrogusto.",
        price: 25000,
        image: new URL("../assets/cafes/quantumEspressoRoast.jpg", import.meta.url).href,
        origin: "Cerrado Mineiro (Brasil)",
        process: "Natural (Miel Negra)",
        notes: "Nuez Tostada, Cacao, Caramelo Oscuro",
      },
      {
        title: "☕ Cosmic Caramel Fusion",
        description:
          "Tostado medio con perfil naturalmente dulce, aroma caramelizado y notas suaves de almendra. Ideal para sobremesas interplanetarias.",
        price: 30000,
        image: new URL("../assets/cafes/cosmicCaramelFusion.jpg", import.meta.url).href,
        origin: "Antigua (Guatemala)",
        process: "Lavado (Washed)",
        notes: "Almendra, Vainilla, Chocolate con Leche",
      },
      {
        title: "☕ Interstellar Midnight Roast",
        description:
          "Tostado muy oscuro, sabor robusto y ahumado con un final largo. Perfecto para quienes prefieren cafés tan intensos como el cielo profundo",
        price: 27000,
        image: new URL("../assets/cafes/interestellar.jpg", import.meta.url).href,
        origin: "Himalaya (Nepal)",
        process: "Natural Anaeróbico",
        notes: "Tierra Húmeda, Pimienta Negra, Tabaco Dulce",
      },
    ];

    setLoading(true);

    fetch("https://api.sampleapis.com/coffee/hot")
    .then((res) => res.json())
    .then((data) => {
      // 2. Buscamos el café de la API que coincida con el ID de la URL
      const cafeBase = data.find((c) => c.id === parseInt(id));

      if (cafeBase) {
        // 3. Obtenemos el índice (posición) de ese café en la lista de la API
        const index = data.slice(0, 6).findIndex((c) => c.id === parseInt(id));

        // 4. Si el índice existe (0 a 5), aplicamos los detalles galácticos
        if (index !== -1) {
          const custom = {
            ...cafeBase, // Mantener datos originales (si los hay)
            ...detallesPersonalizados[index], // Sobrescribir con nuestros detalles
          };
          setCafe(custom);
        } else {
          // El ID existe en la API, pero no está en nuestros primeros 6.
          setCafe(null); 
        }
      } else {
        // El ID no existe en la API
        setCafe(null);
      }
      setLoading(false);
    })
    .catch(() => {
      setCafe(null);
      setLoading(false);
    });
}, [id]);

if (loading) return <p className="loading">Cargando...</p>;
if (!cafe) return <p className="loading">Café no encontrado en la Galaxia.</p>;

  return (
    <div className="detail-container">

      {/* IMAGEN MÁS GRANDE Y CENTRADA */}
      <div className="detail-img-box">
        <img src={cafe.image} alt={cafe.title} className="detail-img big" />
      </div>

      {/* PANEL DE INFORMACIÓN PREMIUM */}
      <div className="detail-info">

        <h2 className="detail-title">☕ {cafe.title}</h2>

        <p className="detail-description">{cafe.description}</p>

        <p className="detail-price">${cafe.price}</p>

        <div className="ficha">
          <h3>Ficha técnica</h3>
          <p><strong>Origen:</strong> {cafe.origin}</p>
          <p><strong>Proceso:</strong> {cafe.process}</p>
          <p><strong>Notas de cata:</strong> {cafe.notes}</p>
        </div>

        {/* BOTÓN ESTILO CAFETERÍA + ICONO 🛒 */}
        <button
          onClick={() => agregarAlCarrito(cafe)}
          className="detail-btn brown"
        >
          🛒 Añadir al carrito
        </button>

      </div>
    </div>
  );
}

export default CafeDetail;
