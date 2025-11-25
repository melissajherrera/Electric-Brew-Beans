import { useState } from "react";
import "../styles/cart.css";

function Cart({ carrito, vaciarCarrito }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [pagoExitoso, setPagoExitoso] = useState(false);

  // Datos del formulario
  const [datosPago, setDatosPago] = useState({
    nombre: "",
    tarjeta: "",
    fecha: "",
    cvv: ""
  });

  // AGRUPAR ITEMS REPETIDOS
  const carritoAgrupado = carrito.reduce((acc, item) => {
    const existente = acc.find((i) => i.id === item.id);
    if (existente) {
      existente.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // SUMAR
  const sumar = (id) => {
    const producto = carrito.find((i) => i.id === id);
    const nuevo = [...carrito, producto];
    vaciarCarrito(nuevo);
  };

  // RESTAR
  const restar = (id) => {
    let eliminado = false;

    const nuevo = carrito.filter((item) => {
      if (!eliminado && item.id === id) {
        eliminado = true; // elimina SOLO una unidad
        return false;
      }
      return true;
    });

    vaciarCarrito(nuevo);
  };

  // TOTAL
  const total = carritoAgrupado.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ELIMINAR COMPLETO
  const eliminarItem = (id) => {
    const nuevo = carrito.filter((item) => item.id !== id);
    vaciarCarrito(nuevo);
  };

  // PROCESAR PAGO
  const procesarPago = () => {
    setPagoExitoso(true);

    setTimeout(() => {
      setPagoExitoso(false);
      setMostrarModal(false);
      vaciarCarrito([]);
      setDatosPago({ nombre: "", tarjeta: "", fecha: "", cvv: "" });
    }, 2000);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Tu Carrito</h2>

      {carrito.length === 0 ? (
        <p className="cart-empty">El carrito está vacío 🛒</p>
      ) : (
        <>
          {/* LISTA DE ITEMS AGRUPADOS */}
          <div className="cart-items">
            {carritoAgrupado.map((item) => (
              <div key={item.id} className="cart-item">

                <img src={item.image} alt={item.title} className="cart-img" />

                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>

                  <div className="qty-box">
                    <button className="qty-btn" onClick={() => restar(item.id)}>
                      –
                    </button>

                    <span className="qty-number">{item.quantity}</span>

                    <button className="qty-btn" onClick={() => sumar(item.id)}>
                      +
                    </button>
                  </div>

                  <p className="subtotal">
                    Subtotal: ${item.price * item.quantity}
                  </p>
                </div>

                <button
                  className="cart-delete"
                  onClick={() => eliminarItem(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total-box">
            <p className="cart-total">Total: ${total}</p>

            <button className="cart-clear" onClick={() => vaciarCarrito([])}>
              Vaciar carrito
            </button>

            <button className="cart-pay" onClick={() => setMostrarModal(true)}>
              Finalizar compra 🚀
            </button>
          </div>
        </>
      )}

      {/* MODAL */}
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            {!pagoExitoso ? (
              <>
                <h3>Pago Simulado</h3>
                <p>Total a pagar: <strong>${total}</strong></p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    procesarPago();
                  }}
                  className="form-pago"
                >
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    value={datosPago.nombre}
                    onChange={(e) =>
                      setDatosPago({ ...datosPago, nombre: e.target.value })
                    }
                    required
                  />

                  <input
                    type="text"
                    placeholder="Número de tarjeta (16 dígitos)"
                    maxLength="16"
                    pattern="\d{16}"
                    value={datosPago.tarjeta}
                    onChange={(e) =>
                      setDatosPago({ ...datosPago, tarjeta: e.target.value })
                    }
                    required
                  />

                  <input
                    type="text"
                    placeholder="MM/AA"
                    maxLength="5"
                    pattern="\d{2}/\d{2}"
                    value={datosPago.fecha}
                    onChange={(e) =>
                      setDatosPago({ ...datosPago, fecha: e.target.value })
                    }
                    required
                  />

                  <input
                    type="text"
                    placeholder="CVV"
                    maxLength="3"
                    pattern="\d{3}"
                    value={datosPago.cvv}
                    onChange={(e) =>
                      setDatosPago({ ...datosPago, cvv: e.target.value })
                    }
                    required
                  />

                  <button type="submit" className="btn-confirmar">
                    Pagar ahora
                  </button>
                </form>

                <button
                  className="btn-cerrar"
                  onClick={() => setMostrarModal(false)}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <h3 className="pago-ok">✔ Pago aprobado</h3>

                <div className="ticket-final">
                  <p><strong>Nombre:</strong> {datosPago.nombre}</p>
                  <p><strong>Tarjeta:</strong> ** ** ** {datosPago.tarjeta.slice(-4)}</p>
                  <p><strong>Vencimiento:</strong> {datosPago.fecha}</p>
                  <p><strong>Total abonado:</strong> ${total}</p>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;