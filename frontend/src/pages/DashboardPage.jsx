import React, { useEffect, useState } from "react";

export default function DashboardPage() {
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState(["Elemento inicial"]);
  const [showDetails, setShowDetails] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification("Mensaje cargado dinámicamente");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems((prev) => [...prev, newItem]);
  };

  const removeLast = () => {
    setItems((prev) => prev.slice(0, -1));
  };

  return (
    <section className="card" id="dashboard-page">
      <h2>Dashboard / Ilustración</h2>

      <div className="widget" id="counter-widget">
        <h3>Contador</h3>
        <p data-testid="counter-value">{counter}</p>
        <button
          id="counter-inc"
          onClick={() => setCounter((c) => c + 1)}
        >
          +1
        </button>
        <button
          id="counter-dec"
          onClick={() => setCounter((c) => c - 1)}
        >
          -1
        </button>
      </div>

      <div className="widget" id="list-widget">
        <h3>Lista dinámica</h3>
        <ul id="items-list">
          {items.map((item, idx) => (
            <li key={idx} className="list-item">
              {item}
            </li>
          ))}
        </ul>
        <button id="btn-add-item" onClick={addItem}>
          Añadir elemento
        </button>
        <button id="btn-remove-item" onClick={removeLast}>
          Quitar último
        </button>
      </div>

      <div className="widget" id="details-widget">
        <h3>Detalles colapsables</h3>
        <button
          id="btn-toggle-details"
          onClick={() => setShowDetails((v) => !v)}
        >
          {showDetails ? "Ocultar" : "Mostrar"} detalles
        </button>
        {showDetails && (
          <p id="details-text">
            Estos detalles aparecen y desaparecen. Perfecto para probar
            visibilidad y condiciones con Selenium.
          </p>
        )}
      </div>

      <div className="widget" id="notification-widget">
        <h3>Notificación retardada</h3>
        {notification ? (
          <p id="notification-text">{notification}</p>
        ) : (
          <p id="notification-loading">Cargando notificación...</p>
        )}
      </div>
    </section>
  );
}
